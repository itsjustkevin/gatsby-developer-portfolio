---
title: 'Seaport Tracker'
description: Tracker for shipping port activity, demonstrating concurrency through the use of queues and jobs.
date: '2019-12-10T0900'
image: Capture.PNG
github: https://github.com/itsjustkevin/Shipping-Tracker
---

### Introduction

During my time in the Navy, I have always wondered how everything was managed at a sea port. Ships, Cargo and Personnel are all tracked entering and leaving any seaport in the world.<br /><br />

### Technologies Used

**Java**
<br /><br />

### Description

This project takes that idea and visually simulates the operations management of a seaport! The project serves as practice for handling concurrency by running job through queues in the realm of Object Oriented Programming with Java.<br /><br />

### User Guide:

To run the program the user must follow the following steps.

1. Ensure Java is installed on your computer.
2. Clone the repository.
3. Open the Command Prompt (Windows) or Terminal(MacOS / Linux) and navigate to the directory where the program was downloaded using the “cd” command.
4. Once in the directory, navigate to the folder containing “SeaPortProgram.java”.
5. In your terminal type `javac SeaPortProgram`.
   There are test files added for your convenience in the "test-files" directory to test the program for all functions before generating your own files to be used by the program.<br /><br />

### Lessons Learned:

- I need to do some refactoring. Some of the methods implemented into the project are there just to make things easier for me and could be added in a more constructive way that falls in line with SOLID principles. My methods to read and parse the text files work just fine in the SeaPortProgram class, but they could be added to their own class that specifically deals with parsing files, which falls under the single responsibility principle of SOLID. Some methods in my World class are there for the purpose of searching, when searching is a different function that should be reserved to a class called searcher or an interface such as Searchable.<br /><br />

- I still need to fully learn and understand the Java API. After doing more research, I found libraries that could have made this toy project easier to complete.<br /><br />

- I spent a lot of time looking up naming conventions for certain types of classes. Looking into the naming conventions for comparators I learned that there is no set convention. Other engineers typically name them like ThingComparatorByWeight. I looked into naming conventions for all of my classes and noticed that the interfaces should be named (verb)able.<br /><br />

- My first iteration of the ThingComparator classes was actually split into a class for each comparison. ThingComparatorByName, ThingComparatorByWeight, etc. I quickly realized that I had to make a tradeoff between sticking to the single responsibility principle or sticking to the DRY model (Do not Repeat Yourself). I decided to throw a switch statement into a single ThingComparator class since the original method would be strange due to the code being very similar.<br /><br />

- Through all the research I did on concurrency, I have not found a way yet to make the program run at a faster rate. It uses too many resources and there should be some way to throttle the program so that I could access other resources on the computer.<br /><br />

- Dynamically adding GUI elements is not as difficult as I once assumed. It is the technique that I used when adding each job as their own component. It is similar to using a library like Vue, React,or Angular to create reusable components.<br />
