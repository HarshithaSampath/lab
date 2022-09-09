const prompt=require('prompt-sync') ( );
a =prompt("Enter a value:");
a=Number(a)
even_check(a);
function even_check(a)
{
for(i=1;i<=a;i++)
{
if(i%2==0)
console.log("%d is even" ,i);
}
}
