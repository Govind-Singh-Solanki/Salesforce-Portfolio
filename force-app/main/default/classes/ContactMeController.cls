global class ContactMeController {

    @AuraEnabled
    public static void createLead(String fname, String lname, String company, String email, String description) {

        Lead newLead = new Lead(
            FirstName=fname,
            LastName=lname,
            Company=company,
            Email=email,
            Description=description
        );
           
        insert newLead;

    }
}