function main() {
    var depth = parseInt(readLine(), 10);
    //your code goes here
    var sum = 0;
    var count = 0;
    for (i=0;i<depth;i++)
    {
        sum+=7;
        count++;
        if (sum>=depth)
        {
            break;
        }
        else
        {
            sum-=2;
        }
    }

    console.log(count);
}
