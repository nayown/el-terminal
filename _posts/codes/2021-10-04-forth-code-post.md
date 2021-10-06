---
title: time converter [pointer]
category: codes
layout: code
---

```C++
#include <iostream>
using namespace std;
int opt;
double choices[3], *c, total[3], *t;

//Time Converter in Pointer
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
            cin>>*c;
            *t = *c * 24;
            cout<<"Hours: "<<*t<<"\n";
            break;

        case 2:
            cout<<"\nHours to Minutes\n";
            cout<<"Input hours: ";
            c++;t++;
            cin>>*c;
            *t = *c * 60;
            cout<<"Minutes: "<<*t<<"\n";
            break;

        case 3:
            cout<<"\nMinutes to Seconds\n";
            cout<<"Input Minutes: ";
            c+=2;t+=2;
            cin>>*c;
            *t = *c * 60;
            cout<<"Seconds: "<<*t<<"\n";
            break;
        
        case 4:
            cout<<"\nSeconds to Minutes:\n";
            cout<<"Input seconds: ";
            c+=3;t+=3;
            cin>>*c;
            *t = *c / 60;
            cout<<"Minutes: "<<*t<<"\n";
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