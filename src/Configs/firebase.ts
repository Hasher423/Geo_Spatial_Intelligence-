import admin from 'firebase-admin';

// Initialize firebase admin using the credentials file from your env
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export const auth = admin.auth();