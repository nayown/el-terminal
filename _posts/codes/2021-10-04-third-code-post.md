---
title: time converter [array]
category: codes
layout: code
---

```C++
#include <iostream>
using namespace std;
int opt;
double choices[3], total[3];

//Time Converter in Array
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
            cin>>choices[0];
            total[0] = choices[0] * 24;
            cout<<"Hours: "<<total[0]<<"\n";
            break;

        case 2:
            cout<<"\nHours to Minutes\n";
            cout<<"Input hours: ";
            cin>>choices[1];
            total[1] = choices[1] * 60;
            cout<<"Minutes: "<<total[1]<<"\n";
            break;

        case 3:
            cout<<"\nMinutes to Seconds\n";
            cout<<"Input Minutes: ";
            cin>>choices[2];
            total[2] = choices[2] * 60;
            cout<<"Seconds: "<<total[2]<<"\n";
            break;
        
        case 4:
            cout<<"\nSeconds to Minutes:\n";
            cout<<"Input seconds: ";
            cin>>choices[3];
            total[3] = choices[3] / 60;
            cout<<"Minutes: "<<total[3]<<"\n";
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