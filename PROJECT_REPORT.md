# Project Report


### Executive Summary (A)

Our goal with this project was to reconfigure the current Student Assessment of Instructors (SAI) survey to be more secure, prompt a higher completion rate,
and overall higher quality answers. We linked into a remote database with encryption and decryption protocols to make the storage of information more secure.
By allowing our site to be mobile friendly, we hoped that it would prompt a higher completion rate because the majority of website activity is via mobile devices.
Since our team has taken the SAI countless times before, we hoped that our experiences could be used to design better questions to hopefully receive higher quality
answers.


### Final Requirements (B)
- Able to Submit a Survey
- Have a Student User View
- Have an Administrator User View
- Able to Log In to an Account

Comparing the final requirements with the initial requirements, the only difference is that we created a Student User view, but have not yet created
a Professor User view.


### Final Timeline (C)

Planned Timeline
| Date | Events |
| --------- | --------- |
| 9/4-10 | Project Plan/Group Contract |
| 9/11-17 | Presentation 1/Language Vulnerability Report |
| 9/18-24 | Learn Javascript/Project Risk Assessment/Start Sprint 1 |
| 9/25-10/1 | Sprint 1 in Progress (US 1&4) |
| 10/2-8 | Finish Sprint 1 |
| 10/9-15 | Start Sprint 2 (UC 2) |
| 10/16-22 | Sprint 2 in Progress |
| 10/23-29 | Presentation 2 |
| 10/30-11/5 | Finish Sprint 2 |
| 11/6-12 | Start Sprint 3 (UC 3) |
| 11/13-19 | Sprint 3 in Progress |
| 11/20-26 | Finishing up Project |
| 11/27-12/3 | Final Presentation |

Actual Timeline
| Date | Events |
| --------- | --------- |
| 9/4-10 | Project Plan/Group Contract |
| 9/11-17 | Presentation 1/Language Vulnerability Report |
| 9/18-24 | Learn Javascript/Project Risk Assessment/Start Sprint 1 |
| 9/25-10/1 | Sprint 1 in Progress (US 1&4) |
| 10/2-8 | Finish Sprint 1 |
| 10/9-15 | Start Sprint 2 |
| 10/16-22 | Finish Sprint 2 |
| 10/23-29 | Presentation 2 |
| 10/30-11/5 | Start Sprint 3 |
| 11/6-12 | Finish Sprint 3 |
| 11/13-19 | Start Sprint 4 |
| 11/20-26 | Finish Sprint 4 |
| 11/27-12/3 | Final Presentation |

Comparing the final timeline with the initial timeline, we greatly underestimated the time that it would take for team members to learn javascript.
As a reminder, only one of our four team members was familiar with javascript before we started coding. In the initial timeline, we had allotted one
week to learn javascript, while also completing the first week of our first sprint. We stuttered during this first sprint. We had initially planned to
have a series of three-week sprints, but it was decided to shorten the next few sprints to two weeks each. This was done in order to allow for more focus
on learning the language while coding.


### Project Results Compared with Expectations (D)

Initial Use Cases That Are Functional:
- Survey Submission
- Login

Initial Use Cases That Are In Progress:
- Professor User View
- Administrator User View

Use Cases That Have Been Removed, Added, or Modified:
- Student User View has been added

Comparing project results with project expectations, the whole team expected to be able to make much more progress on the functionality
of the program before the end of the semester than we were able to accomplish. This overall delay in our expected progress is almost entirely
due to the difficulty that several of us had in learning a new programming language from scratch.


### Software Evaluation (E)

Functionality:

Testing tools:
- Jest
- Puppeteer
- Eslint

Testing Methods:
- Unit
- Integration
- End-to-End
- Static

What was the testing timeline?
- Goal was Test-Driven Development
- Ended up doing testing as the project was developed
- Started with smaller and worked towards bigger tests


Which functionality issues are still open?
- Ipc functions are not tested yet
- Puppeteer tests have been started but not yet fully implemented


Which security methods and tools have been employed?
- Language Vulnerability Assessment
- Pre-Project Risk Assessment
- 3rd-Party Package Assessment
- Static Code Analysis (Eslint)


What were relevant security observations?

Most 3rd-Party packages (tools/APIs) are riddled with problems. These problems are primarily centered around dependencies that have been
incorporated into the tool or API by the developer. While a small percentage of the available tools/APIs are consistently maintained, the
vast majority have been abandoned. This results in discovered vulnerabilities that are never patched. However, even when patched, these
packages–that have been changed–may break parts of a program that uses them.


Which security issues are still open?
- Implement an .env file for securing database login information
- Implement hashing of passwords
- Fuzz testing
- Injection testing
- Penetration testing



### Work Left to Be Done

- Finish the Professor View
- Admin is able to create courses and assign students
- Implement an .env file for securing database login information
- Implement hashing of passwords
- Create aesthetics
- Distinguish between class responses

