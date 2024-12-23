// pages/api/formUpdate.js

export default function handler(req, res) {
    // Simulating real-time updates
    const mockData = {
        personalInfo: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com"
        },
        addressDetails: {
            streetAddress: "123 Main St",
            city: "New York",
            postalCode: "10001"
        },
        preferences: {
            preferredLanguage: "English",
            contactMethod: "Email",
            newsletterSubscription: "yes"
        }
    };

    // Simulating a delay to mimic real-time updates (e.g., from a server)
    setTimeout(() => {
        res.status(200).json(mockData);
    }, 2000); // Delay 2 seconds before responding
}
