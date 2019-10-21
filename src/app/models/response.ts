interface RootObject {
    users: User[];
  }
  
  interface User {
    emailid: string;
    topic?: Topic[];
  }
  
  interface Topic {
    data?: Datum[];
    name: string;
  }
  
  interface Datum {
    header: string;
    text: string;
    url: string;
    
  }