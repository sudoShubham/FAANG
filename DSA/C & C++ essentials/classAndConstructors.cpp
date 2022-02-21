#include<iostream>
using namespace std;
class Rectangle{
    private:    
        int length, breadth;
    public:
        Rectangle(){
            length = breadth = 1;          //Constructor
        }

        Rectangle(int l,int b);           //Constructor Overloading
        int area();                       //Fascilatators
        int perimeter();                  //Fascilatators  

        int getLength(){                 //Accessor
            return length;
        }

        int setLength(int l){               //Mutator
            length = l;
        }

        ~Rectangle();                       //Destructor

};

Rectangle ::Rectangle(int l,int b){
    length = l;
    breadth = b;
}

int Rectangle :: area(){
    return length*breadth;
}

int Rectangle :: perimeter(){
    return 2*(length + breadth);
}

Rectangle :: ~ Rectangle(){
    cout<<"Destructor has been just called.";
}

int main(){
    Rectangle r(10,5);
    cout<<r.perimeter();
}
