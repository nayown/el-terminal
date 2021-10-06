---
title: jankenpon
category: codes
layout: code
---

```C++
int main(){
 
    //Player vs Computer
    char playerPick;
    int computerPick = 3;
    srand(time(0));
    char computerBrain[computerPick] = {'R', 'P', 'S'};
    bool complayWin = false;
 
    //Player vs Player
    string playerOneName, playerTwoName;
    char playerOnePick, playerTwoPick;
    char playGame = 'Y';
    bool playerWin = false;
 
    //Game Options
    int playerOption;
    cout<<"Welcome to Console Type Rock Paper Scissors, Good Luck and Have Fun! :D \n\n";
    cout<<"Main menu\n\n";
    cout<<"[1] Player vs Computer \n[2] Player vs Player\n[3] Exit \n\nTo play choose between [1] and [2]: ";
    cin>>playerOption;
    system("CLS");
 
    //Single Player
    if(playerOption == 1){
        while (playGame == 'Y'|| playGame == 'y'){
            cout<<"Welcome to the Player vs Computer Rock Paper Scissors.\n\n";
            cout<<"Instructions:\n\nTo defeat the computer, pick Rock Paper Scissors.\n";
            cout<<"[R] for Rock, [P] for Paper, [S] for Scissors.\n";
            cout<<"The computer will pick after you pick.\n";
            cout<<"Rock beats Scissors, Paper beats Rock, Scissors beats Paper.\n";
            cout<<"Enjoy and Have Fun!\n\n";
 
            do {
                cout<<"Player: [R]ock [P]aper [S]cissors: ";
                cin>>playerPick;
                cout<<"\nPlayer picks: "<<playerPick<<"\n";
 
                for (int i = 0; i < 1; i++){
                    int computerResult = rand() % computerPick;
                    cout<<"Computer picks: ";
                    cout<<computerBrain[computerResult];
                    cout<<"\n";
 
                    if(playerPick == 'P' && computerBrain[computerResult] == 'R'){
                        complayWin = true;
                        cout<<"Player Wins!";
                    }
 
                    if(computerBrain[computerResult] == 'P' && playerPick == 'R'){
                        complayWin = true;
                        cout<<"Computer Wins!\n";
                    }
 
                    if(playerPick == 'R' && computerBrain[computerResult] == 'S'){
                        complayWin = true;
                        cout<<"Player Wins!\n";
                    }
 
                    if(computerBrain[computerResult] == 'R' && playerPick == 'S'){
                        complayWin = true;
                        cout<<"Computer Wins!\n";
                    }
 
                    if(playerPick == 'S' && computerBrain[computerResult] == 'P'){
                        complayWin = true;
                        cout<<"Player Wins!\n";
                    }
 
                    if(computerBrain[computerResult] == 'S' && playerPick == 'P'){
                        complayWin = true;
                        cout<<"Computer Wins!\n";
                    }
 
                    if(playerPick == 'R' && computerBrain[computerResult] == 'R'){
                        complayWin = false;
                        cout<<"No one wins, Please Repick!\n\n";
                    }
 
                    if(playerPick == 'P' && computerBrain[computerResult] == 'P'){
                        complayWin = false;
                        cout<<"No one wins, Please Repick!\n\n";
                    }
 
                    if(playerPick == 'S' && computerBrain[computerResult] == 'S'){
                        complayWin = false;
                        cout<<"No one wins, Please Repick!\n\n";
                    }
                    
                }
 
            } while(complayWin == false);
 
            cout<<"\nDo you want to play again?[Y]/[N]: ";
            cin>>playGame;
            system("CLS");
        }
    }
 
    //Two Players
    if(playerOption == 2){
        while (playGame == 'Y'|| playGame == 'y'){
            cout<<"Welcome to the Two Player of Rock Paper Scissors.\n\n";
            cout<<"Instructions:\n\n";
            cout<<"[R] for Rock, [P] for Paper, [S] for Scissors.\n";
            cout<<"Rock beats Scissors, Paper beats Rock, Scissors beats Paper.\n";
            cout<<"Console will clear the screen after a player picks to hide it.\n";
            cout<<"Enjoy and Have Fun!\n\n";
            cout<<"Write your name first player: ";
            cin>>playerOneName;
            cout<<"Write your name second player: ";
            cin>>playerTwoName;
 
            do {
                cout<<"\n1st Player:"<<playerOneName<<" [R]ock [P]aper [S]cissors: ";
                cin>>playerOnePick;
                system("CLS"); // Hiding player one input
                cout<<"\n2nd Player:"<<playerTwoName<<" [R]ock [P]aper [S]cissors: ";
                cin>>playerTwoPick;
                system("CLS"); // Hiding player two input
 
                cout<<playerOneName<<" picks: "<<playerOnePick<<"\n";
                cout<<playerTwoName<<" picks: "<<playerTwoPick<<"\n";
 
                if(playerOnePick == 'P' && playerTwoPick == 'R' ){
                    playerWin = true;
                    cout<<"\n"<<playerOneName<<" Wins!";
                }
                if(playerTwoPick == 'P' && playerOnePick == 'R'){
                    playerWin = true;
                    cout<<"\n"<<playerTwoName<<" Wins!";
                }
 
                if(playerOnePick == 'R'  && playerTwoPick == 'S'){
                    playerWin = true;
                    cout<<"\n"<<playerOneName<<" Wins!";
                }
                if(playerTwoPick == 'R' && playerOnePick == 'S'){
                    playerWin = true;
                    cout<<"\n"<<playerTwoName<<" Wins!";
                }
 
                if(playerOnePick == 'S' && playerTwoPick == 'P'){
                    playerWin = true;
                    cout<<"\n"<<playerOneName<<" Wins!";
                }
                if(playerTwoPick == 'S' && playerOnePick == 'P'){
                    playerWin = true;
                    cout<<"\n"<<playerTwoName<<" Wins!";
                }
 
                if(playerWin == false){
                    cout <<"\nNo One Wins, Please Repick!\n\n";
                }
 
            } while(playerWin == false);
 
            cout<<"\n\nDo you want to play again?[Y]/[N]: ";
            cin>>playGame;
            system("CLS");
        }
    }
    cout<<"\nThanks for Playing!\n";
}
```