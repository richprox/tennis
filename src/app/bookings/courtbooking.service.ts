import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CourtBookingService {
  constructor(private db: AngularFireDatabase) {}

  async bookCourt(courtId: number, date: Date, startTime: string, endTime: string) {
    // Get a reference to the court's booking data in the Firebase database
    const courtRef = this.db.object(`courts/${courtId}/bookings/${date}`);

    // Retrieve the court's booking data from the database
    const bookingData = await courtRef.valueChanges().toPromise();

    // Check that the court is available during the requested time
    let isAvailable = true;
    for (const [bookingStart, bookingEnd] of Object.entries(bookingData)) {
      if (startTime >= bookingStart && endTime <= bookingEnd) {
        isAvailable = false;
        break;
      }
    }
    if (!isAvailable) {
      throw new Error('This court is not available for the requested time');
    }
    // check that duration of the booking is 1 hour
    const start = new Date(`${date}T${startTime}:00.000Z`);
    const end = new Date(`${date}T${endTime}:00.000Z`);
    const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    if (duration !== 1) {
      throw new Error('Booking duration must be 1 hour');
    }

    // Update the court's booking data to indicate that it is now booked
    courtRef.update({
      [startTime]: endTime,
    });
  }
}
