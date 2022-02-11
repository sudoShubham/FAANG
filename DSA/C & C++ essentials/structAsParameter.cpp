#include<iostream>
using namespace std;

struct rect {
    int length;
    int breadth;
};

/*   //call by value
int area(struct rect r1){
    return r1.length * r1.breadth;
}

int main(){
    struct rect r;
    r.length = 10;
    r.breadth = 5;
    cout<<area(r);
}

*/


/*  //callbyaddress
void changeLength(struct rect *r1,int newLength){
    r1->length = newLength;
}

int main(){
    struct rect r = {10,20};
    cout<<r.length<<" "<<r.breadth<<"\n";
    changeLength(&r,30);
    cout<<r.length<<" "<<r.breadth;
}
*/


/*
struct structureWithArray{
    int a[5];
    int length;
};

void changeValue(struct structureWithArray p){
    p.a[3] = 50;
}

int main(){
    struct structureWithArray s;
    s = {{0,0,0,0,0},5};
    changeValue(s);
    cout<<s.a[3];
}

*/


struct rect * createNewRect(){
    struct rect *p;
    p = new rect;
    p->length =10;
    p->breadth = 20;
    cout<<p->length<<" "<<p->breadth<<"\n";
    return p;
}

int main(){
    struct rect * r1 = createNewRect();
    r1->length = 40;
    r1->breadth = 80;
cout<<r1->length<<" "<<r1->breadth;
}