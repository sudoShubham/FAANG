#include <iostream>
using namespace std;
int main()
{
    static int a[5]; //Initialise array with 0
    int b[5];        //Initialize with garbage
    int c[5] = {};   //Initialise array with 0
    for (int i = 0; i < 5; i++)
    {
        cout << a[i] << " ";
    }

    cout << "\n"
         << sizeof(a);
}