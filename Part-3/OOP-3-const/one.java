class Account{
    Account(){
        System.out.println("Special Method");
    }
    public static void main(String[] args) {
        new Account();
        new Account();
        new Account();
    }
}