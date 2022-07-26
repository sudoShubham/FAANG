#include<iostream>
using namespace std;

static int countMe = 0;
void treeRecursion(int n){
    
    countMe++;
    if(n>0){
        cout<<n<<"\t";
        treeRecursion(n-1);
        treeRecursion(n-1);
    }
}

int main(){
    
    treeRecursion(3);
    cout<<countMe;
}
