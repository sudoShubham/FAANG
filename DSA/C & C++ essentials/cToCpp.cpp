#include<iostream>
using namespace std;
class rect{
    private:
        int length;
        int breadth;

   public:
        rect(int l,int b){
            length = l;
            breadth = b;
         }

        void display(){
            cout<<length<<"\n";
            cout<<breadth;
        }

        int getArea(){
            return length*breadth;
        }

};

int main(){
    rect obj(10,5);
    obj.display();
}