---
title: time converter [normal]
category: codes
layout: code
---

```C++
#include <iostream>
using namespace std;
int opt;
double day, hrs, mins, sec, totalDay, totalHrs, totalMins, totalSec;

//Time Converter
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
            cin>>day;
            totalDay = day * 24;
            cout<<"Hours: "<<totalDay<<"\n";
            break;

        case 2:
            cout<<"\nHours to Minutes\n";
            cout<<"Input hours: ";
            cin>>hrs;
            totalHrs = hrs * 60;
            cout<<"Minutes: "<<totalHrs<<"\n";
            break;

        case 3:
            cout<<"\nMinutes to Seconds\n";
            cout<<"Input Minutes: ";
            cin>>mins;
            totalMins = mins * 60;
            cout<<"Seconds: "<<totalMins<<"\n";
            break;
        
        case 4:
            cout<<"\nSeconds to Minutes:\n";
            cout<<"Input seconds: ";
            cin>>sec;
            totalSec = sec / 60;
            cout<<"Minutes: "<<totalSec<<"\n";
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