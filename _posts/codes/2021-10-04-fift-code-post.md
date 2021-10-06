---
title: time converter [struct]
category: codes
layout: code
---

```C++
#include <iostream>
using namespace std;
int opt;
struct convert{
    double choices, total;
};
struct convert conv[3];

//Time Converter in Struct
int main(){
    cout<<"Welcome to Time Converter Console \n\n";
    cout<<"[1] Days to Hours \n";
    cout<<"[2] Hours to Minutes \n";
    cout<<"[3] Minutes to Seconds \n";
    cout<<"[4] Seconds to Minutes \n";
    cout<<"[5] Exit \n";
    cout<<"\n\nWhat do yo want to convert?(1-5): ";
    cin>>opt;

    switch(opt){
        case 1:
            cout<<"\nDays to Hours\n";
            cout<<"Input days: ";
            cin>>conv[0].choices;
            conv[0].total = conv[0].choices * 24;
            cout<<"Hours: "<<conv[0].total<<"\n";
            break;

        case 2:
            cout<<"\nHours to Minutes\n";
            cout<<"Input hours: ";
            cin>>conv[1].choices;
            conv[1].total = conv[1].choices * 60;
            cout<<"Minutes: "<<conv[1].total<<"\n";
            break;

        case 3:
            cout<<"\nMinutes to Seconds\n";
            cout<<"Input Minutes: ";
            cin>>conv[2].choices;
            conv[2].total = conv[2].choices * 60;
            cout<<"Seconds: "<<conv[2].total<<"\n";
            break;
        
        case 4:
            cout<<"\nSeconds to Minutes:\n";
            cout<<"Input seconds: ";
            cin>>conv[3].choices;
            conv[3].total = conv[3].choices / 60;
            cout<<"Minutes: "<<conv[3].total<<"\n";
            break;

        case 5:
            cout<<"\nThank you for using the application.\n";
            exit(0);
            break;

        default: 
            cout<<"None of the options.\n Restart the app.";
    }

}
```