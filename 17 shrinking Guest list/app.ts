Hey @everyone 👋
🚀 **Day 6 Challenge: Start Coding!** 🚀

**Question 16:** More Guests: You've found a bigger dinner table, so there's room for more guests.

**Explain & TIP:** When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.

**Answer: Please try to do it yourself first!**

||```typescript
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
```||

**Question 17:** Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

**Explain & TIP:** Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.

**Answer: Please try to do it yourself first!**

||```typescript
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); 