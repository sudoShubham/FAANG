#include <iostream>
using namespace std;

struct rectangle
{
    int length;
    int breadth;
};

int main()
{
    rectangle r;
    struct rectangle setOfRectangles[10]; //Array of Structure
    setOfRectangles[0].breadth = 10;
    setOfRectangles[0].length = 15;

    r.length = 5;
    r.breadth = 2;
    int area = setOfRectangles[0].breadth * setOfRectangles[0].length;
    cout << area;
    cout << "\n"
         << sizeof(r); // 4 Bytes + 4 Bytes
}