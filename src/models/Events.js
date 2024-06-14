const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  header: { type: String, required: true },
  header_image: { type: String, required: true },
  programming_bootcamp: {
    description: { type: String, required: true },
    bootcamp_image: { type: String, required: true },
    overview: {
      title: { type: String, required: true },
      content: { type: String, required: true },
    },
    what_you_learn: {
      title: { type: String, required: true },
      topics: [
        {
          title: { type: String, required: true },
          description: { type: String, required: true },
        },
      ],
    },
    why_attend: {
      title: { type: String, required: true },
      benefits: [String],
    },
    schedule: {
      title: { type: String, required: true },
      sessions: [
        {
          time: { type: String, required: true },
          activity: { type: String, required: true },
        },
      ],
    },
    success_stories: {
      title: { type: String, required: true },
      content: { type: String, required: true },
    },
    enrollment: {
      title: { type: String, required: true },
      content: { type: String, required: true },
    },
    contact_us: {
      title: { type: String, required: true },
      content: { type: String, required: true },
    },
    join_us: {
      title: { type: String, required: true },
      content: { type: String, required: true },
    },
    event_details: {
      event_type: { type: String, required: true },
      event_date: { type: String, required: true },
      event_time: { type: String, required: true },
      registration_fee: { type: String, required: true },
      total_seats: { type: Number, required: true },
      seats_booked: { type: Number, required: true },
      remaining_seats: { type: Number, required: true },
      total_price: { type: String, required: true },
      payment_methods: [String],
      refund_policy: { type: String, required: true },
    },
  },
});

module.exports = mongoose.model("Events", eventSchema);
