const twilio = require('twilio');

class TwilioService {
  constructor() {
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
      try {
        this.client = twilio(
          process.env.TWILIO_ACCOUNT_SID,
          process.env.TWILIO_AUTH_TOKEN
        );
        this.enabled = true;
      } catch (error) {
        console.warn('Failed to initialize Twilio client:', error.message);
        this.enabled = false;
      }
    } else {
      console.warn('Twilio credentials not found in environment variables');
      this.enabled = false;
    }
  }

  async sendSMS(to, body) {
    if (!this.enabled) {
      console.log('SMS would have been sent:', { to, body });
      return null;
    }

    try {
      const message = await this.client.messages.create({
        body,
        to,
        from: process.env.TWILIO_PHONE,
      });
      console.log(`SMS sent successfully: ${message.sid}`);
      return message;
    } catch (error) {
      console.error('Error sending SMS:', error);
      return null;
    }
  }

  async notifyTechnicianForEmergency(emergency) {
    const message = `
🚨 URGENCE - Nouveau ticket
Client: ${emergency.name}
Type: ${emergency.emergencyType}
Tel: ${emergency.phone}
Adresse: ${emergency.address}
Description: ${emergency.description}
    `.trim();

    return this.sendSMS(process.env.TECHNICIAN_PHONE, message);
  }

  async notifyClientAppointmentConfirmation(appointment) {
    const date = new Date(appointment.appointmentDate).toLocaleString('fr-FR');
    const message = `
PC-Média@ - Confirmation de RDV
Date: ${date}
Service: ${appointment.serviceType}
Merci de votre confiance !
Pour annuler, appelez le XXXXX
    `.trim();

    return this.sendSMS(appointment.phone, message);
  }
}

module.exports = new TwilioService();
