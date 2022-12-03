# User/Administrator Manual


## SAI: Reimagined


#### Features:
- Three access levels with corresponding permissions: Administrator, Professor, Student.


#### Functions and Capabilities:
- Student account shows all courses in which the student is enrolled.
- Student Assessment of Instruction (SAI) for each course is directly accessible from Student user interface.
- Each SAI can be completed and submitted by the Student user.
- Notification to the student when SAI has been successfully submitted.
- Administrator User can create new user accounts.


#### Installation Instructions
- Ensure Node.js is installed on target computer.
- Download this repository to a clean folder.
- Change directory to 'SAI-Reimagined' folder.
- Contact the development team so that someone can open the remote database.
- Wait for confirmation that the database has been opened.
- From within the SAI-Reimagined folder, run 'npm i' from command line. This will install all packages necessary to run the program.
- DO NOT run updating.
- From within the SAI-Reimagined folder, run 'npm run start' to begin SAI: Reimagined.


#### Program Walk-Throughs
##### As Student User:
1.  At Login Screen, type in 'Student1' for username and 'testing' for password.
2.  Click *Log in Here!* button.
3.  The courses for Student1 are displayed in the centered box labeled "Fall Semester 2022".
4.  Clicking on one of the course buttons will bring up the Student Assessment of Instruction (SAI) for the selected course.
5.  Fill out the SAI.
6.  Click the *submit* button.
7.  Notification will display that submission has been received.
8.  Exit Window. This ends Student account interactivity.


##### As Administrator User:
1.  Restart program.
2.  At Login Screen, type in 'test' for username and 'test123' for password.
3.  Click *Log in Here!* button.
4.  The Admin Panel is displayed. This shows options to reister a user, view course list, view list of students, and view list of professor(s).
PLEASE NOTE: The list of courses is not available at this point. ALSO: Leaving the Admin Panel page may necessitate a new login, as there are no 'back' buttons for all options.
5.  Click on the 'Register User' button.
6.  From this screen, a new system user can be registered by assigning a username, password, and role.
7.  Return to Admin Panel by clicking on the 'back button'.
OR
8.  Restart program.
9.  Log in as Administrator User.
10.  Click on the 'List of Students' button.
11.  A raw list of student users is displayed.
12.  Exit window. This ends Administrator account interactivity.
OR
13.  Restart program.
14.  Log in as Administrator User.
15.  Click on the 'List of Professor' button.
16.  A raw list of professors is displayed.
17.  Exit window. This ends Administrator account interactivity.


##### As Professor User:
1.  Restart program.
2.  At Login Screen, type in 'professorTest' for username and 'test123' for password.
3.  Click *Log in Here!* button.
4.  The Professor Panel is displayed.
5.  Exit window. This ends Professor account interactivity.

##### Test:
Jest: npm test
Puppeteer: node puppeteer/headlesstest.js
