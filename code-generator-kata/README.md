# CodeGeneratorKata
*"Write code that write code"*

Inspired by [The pragmatic programmer](http://www.amazon.fr/The-Pragmatic-Programmer-Journeyman-Master-ebook/dp/B000SEGEKI/ref=dp_kinw_strp_1) 

* Given a message, we want this message to be translated in plain old java and dart object.
* It should be easy to add new language to our generator

#### The message
```
  # Domain representation of product 
  # has an id, a name and an order_code
  M Product
  F id   integer
  F name   text
  F order_code integer
  E
```
* A message start with a ```M``` tag and has a name
* A message end with a ```E``` tag
* A message should have zero or more line of comment before it start. Comment is represented by a ```#``` tag
* A message should have one or more fields represented by the ```F``` tag. Fields have a name and a type. Supported types are ```integer``` and ```text```
