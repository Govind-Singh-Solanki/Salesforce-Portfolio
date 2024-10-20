//Class for practice purpose (Agentforce health checkup appointment)
public class FetchSlot {
    
    // Define a wrapper class for input parameters
    public class SlotInput {
        @InvocableVariable
        public Id docId;
        
        @InvocableVariable
        public Date appointmentDate;
        
        @InvocableVariable
        public String slotType;
    }

    @InvocableMethod(
        label='Fetch Available Slots'
        description='Fetches available slots for a doctor on a specific date and time of day'
    )

    public static List<List<String>> fetchSlot(List<SlotInput> inputs) {

        // Ensure we have input values
        if (inputs == null || inputs.isEmpty()) {
            return new List<List<String>>();
        }

        // Extract the input values from the wrapper
        SlotInput input = inputs[0];  // Since only one set of inputs will be passed at a time
        Id docId = input.docId;
        Date appointmentDate = input.appointmentDate;
        String slotType = input.slotType.toLowerCase();  // Convert to lowercase for easy comparison

        // Define morning and evening slots
        List<String> morningSlots = new List<String>{'9AM-10AM', '10AM-11AM'};
        List<String> eveningSlots = new List<String>{'4PM-5PM', '5PM-6PM', '6PM-7PM'};
        List<String> selectedSlots = new List<String>();

        // Choose the slots based on the provided "slotType"
        if (slotType == 'morning') {
            selectedSlots = morningSlots;
        } else if (slotType == 'evening') {
            selectedSlots = eveningSlots;
        } else {
            // Return an empty list if the slotType is invalid
            return new List<List<String>>();
        }

        // Query all appointments for the given doctor, date, and selected slots
        List<Appointment__c> appointments = [ 
            SELECT Slots__c 
            FROM Appointment__c 
            WHERE Doctor__c = :docId 
            AND Appointment_Date__c = :appointmentDate
            AND Slots__c IN :selectedSlots
        ];

        // Create a list to store available slots
        List<String> availableSlots = new List<String>(selectedSlots); // Start with all selected slots
        
        // Filter out booked slots
        Set<String> bookedSlots = new Set<String>();
        for (Appointment__c app : appointments) {
            if (app.Slots__c != null) {
                bookedSlots.add(app.Slots__c);
            }
        }
        
        // Now remove the booked slots from available slots
        List<String> finalAvailableSlots = new List<String>();
        for (String slot : availableSlots) {
            if (!bookedSlots.contains(slot)) {
                finalAvailableSlots.add(slot);  // Add slot only if it's not booked
            }
        }

        // Return the list of available slots wrapped in a list of lists
        return new List<List<String>>{finalAvailableSlots};
    }
}
