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
    r.length = 5;
    r.breadth = 2;
    int area = r.breadth * r.length;
    cout << area;
    cout << "\n"
         << sizeof(r); // 4 Bytes + 4 Bytes
}