// Personal planners: seeded into the browser but hidden from the home list. Reachable only by link, e.g. #/plan/annika-dec-2026
export const PERSONAL = [
{
 "id": "annika-dec-2026",
 "name": "Annika · Dec 2026 Exams + Cloud (personal)",
 "start": "2026-11-09",
 "examStart": "2026-12-04",
 "settings": {
  "weekdayMin": 150,
  "weekendMin": 240,
  "restDay": 0,
  "restMin": 105,
  "revisionDays": 4
 },
 "subjects": [
  {
   "id": "imm",
   "name": "Immunology",
   "color": "#e88fa8",
   "examDate": "",
   "topicMin": 75,
   "labMin": 60,
   "labsPer": 2,
   "topicsText": "Unit I — Innate vs adaptive immunity | Innate, adaptive & comparative immunity\nUnit I — Cells, organs & antigens | Cells and organs of the immune system, antigens\nUnit II — Immunoglobulins | Ig structure, Ig classes & activities, antigenic determinants, B cell receptor\nUnit II — Monoclonals, cytokines, complement | Monoclonal antibodies, cytokines, complement system\nUnit III — Ag-Ab interactions | Affinity & avidity, precipitation, agglutination\nUnit III — Immuno techniques | RIA, ELISA, Western blot, immunoprecipitation, immunofluorescence, IEM, flow cytometry\nUnit III — MHC | MHC, antigen processing & presentation | 60\nUnit IV — T cells | TCR, T cell maturation, activation & differentiation\nUnit IV — B cells | B cell generation, activation & differentiation, cell-mediated effector responses | 60\nUnit V — Inflammation & hypersensitivity | Leukocyte migration, inflammation, hypersensitivity types I–IV\nUnit V — Infection & vaccines | Immune response to infectious diseases, vaccines",
   "labsText": ""
  },
  {
   "id": "ip",
   "name": "Internet Programming",
   "color": "#7fa7e0",
   "examDate": "",
   "topicMin": 75,
   "labMin": 90,
   "labsPer": 1,
   "topicsText": "Topic 1a — Web essentials | Website basics, HTML5, CSS3, Web 2.0, PWA, Internet, protocols, WWW, HTTP request/response, clients & servers\nTopic 1b — HTML5 & CSS3 | HTML5 elements, controls, semantic, drag & drop, audio/video; CSS Grid, Flexbox, cascade, transforms, transitions, animations, dark mode\nTopic 2 — Client-side programming | JS frameworks, DOM, regex, validation, TypeScript, WASM, serverless JS, DHTML, AJAX, XHR, callbacks, JSON | 90\nTopic 3a — Server-side I | Spring Boot + Servlets, GET/POST, sessions, cookies, AWS Lambda, Cloud Run\nTopic 3b — Server-side II | JDBC, JSP, JSTL, GraphQL, AI chatbots\nTopic 4 — PHP & XML | PHP basics, validation, regex, Laravel/Symfony, DB; XML Schema, DOM, parsers, XSLT, JSON-LD | 90\nTopic 5 — Web services | REST & SOAP, WSDL, consuming services, DB-driven services, 5G/edge, WebSockets, blockchain",
   "labsText": "Lab — build your master template | Login + Register + Admin CRUD + search + DB (Library system)\nLab — booking & billing types | Booking site (hotel/bus/train) + calculation site (EB bill, income tax)"
  },
  {
   "id": "r",
   "name": "Statistics with R",
   "color": "#7cc4a4",
   "examDate": "",
   "topicMin": 75,
   "labMin": 30,
   "labsPer": 3,
   "topicsText": "Unit I — R basics | Running R, sessions, functions, math, variables, data types\nUnit I — Data structures | Vectors, lists, matrices, arrays, factors, data frames\nUnit I — Classes | S3, S4 & Reference classes; matrix & array operations | 45\nUnit II — Loops & control | for, while, if-else, operators, looping over non-vector sets\nUnit II — Functions & recursion | Default args, return values, complex objects, recursion\nUnit III — Data frames & files | Data frames, reshaping, melt & cast, merging, file I/O\nUnit IV — Univariate EDA | Central tendency, dispersion, quartiles, skewness, kurtosis\nUnit IV — Bivariate EDA | Crosstabs, covariance, correlation\nUnit V — Plotting | Base plots, lattice, ggplot2, saving graphs\nUnit V — Regression | Simple, multiple, logistic, Poisson regression",
   "labsText": "Lab 1\nLab 2\nLab 3\nLab 4\nLab 5\nLab 6\nLab 7\nLab 8\nLab 9\nLab 10\nLab 11\nLab 12\nLab 13\nLab 14\nLab 15\nLab 16\nLab 17\nLab 18\nLab 19\nLab 20\nLab 21"
  },
  {
   "id": "ml",
   "name": "Machine Learning Lab",
   "color": "#c49be3",
   "examDate": "",
   "topicMin": 60,
   "labMin": 40,
   "labsPer": 2,
   "topicsText": "",
   "labsText": "FIND-S\nCandidate-Elimination\nID3 decision tree\nANN Backpropagation\nK-NN\nNaive Bayes\nLogistic Regression\nLinear Regression\nLinear vs Polynomial Regression\nEM algorithm\nCredit Score Classification\nIris KNN\nCar Price Prediction\nHouse Price Prediction\nIris Naive Bayes\nCompare classifiers\nMobile Price Prediction\nPerceptron Iris\nNaive Bayes Bank Loan\nFuture Sales Prediction"
  },
  {
   "id": "cloud",
   "name": "Cloud plan",
   "color": "#9bbdd9",
   "examDate": "",
   "topicMin": 60,
   "labMin": 60,
   "labsPer": 1,
   "topicsText": "",
   "labsText": ""
  }
 ],
 "days": {
  "2026-11-09": [
   {
    "id": "ex0-0",
    "s": "imm",
    "t": "Unit I — Innate vs adaptive immunity",
    "d": "Innate immunity, adaptive immunity, comparative immunity. Make a 2-column comparison table.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex0-1",
    "s": "r",
    "t": "Unit I — R basics",
    "d": "How to run R, basic features, R sessions & functions, basic math, variables, data types. Do Lab 1 (numeric/character/logical vectors).",
    "m": 75,
    "kind": "study"
   }
  ],
  "2026-11-10": [
   {
    "id": "ex1-0",
    "s": "ip",
    "t": "Topic 1a — Web essentials",
    "d": "Website basics, HTML5, CSS3, Web 2.0, PWA, the Internet, basic protocols, WWW, HTTP request & response messages, web clients & servers.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex1-1",
    "s": "ml",
    "t": "Labs 1–2",
    "d": "FIND-S algorithm; Candidate-Elimination (reads a .CSV). Run both, write the algorithm steps in 5 lines each.",
    "m": 75,
    "kind": "study"
   }
  ],
  "2026-11-11": [
   {
    "id": "ex2-0",
    "s": "imm",
    "t": "Unit I — Cells, organs & antigens",
    "d": "Cells and organs of the immune system (primary vs secondary lymphoid organs), antigens. Draw the organ diagram once.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex2-1",
    "s": "r",
    "t": "Unit I — Data structures",
    "d": "Vectors, atomic & character vectors, logical vector ops, lists, matrices, arrays, factors, data frames. Labs 2–4 (matrices, 3D array, named arrays).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-11-100",
    "s": "ml",
    "t": "Lab block — ML lab 1: FIND-S",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-11-101",
    "s": "r",
    "t": "Lab block — R lab 1: vectors (numeric/char/logical)",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-11-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-11-201",
    "s": "cloud",
    "t": "Cloud — CS50P L0 Functions & variables",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-11-202",
    "s": "cloud",
    "t": "Cloud — CS50P L0 problem set",
    "d": "",
    "m": 90,
    "kind": "study"
   }
  ],
  "2026-11-12": [
   {
    "id": "ex3-0",
    "s": "ip",
    "t": "Topic 1b — HTML5 & CSS3",
    "d": "Tables, lists, images, HTML5 controls, semantic elements, drag & drop, audio/video. CSS Grid & Flexbox, cascading, inheritance, transforms, transitions, animations, dark mode, browser security.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex3-1",
    "s": "ml",
    "t": "Labs 3–4",
    "d": "ID3 decision tree (classify a new sample); ANN with Backpropagation.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-12-100",
    "s": "ip",
    "t": "Lab block — IP template step 1",
    "d": "Login + Register pages: HTML form, CSS, JS validation (regex for email/ID). Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 90,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-12-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-12-201",
    "s": "cloud",
    "t": "Cloud — Install Python + VS Code; create AWS free-tier account, MFA, ₹200 billing alarm",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-12-202",
    "s": "cloud",
    "t": "Cloud — Python practice set 1",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-12-203",
    "s": "cloud",
    "t": "Cloud — CS50P L1 Conditionals",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   }
  ],
  "2026-11-13": [
   {
    "id": "ex4-0",
    "s": "imm",
    "t": "Unit II — Immunoglobulins",
    "d": "Basic Ig structure (draw it!), Ig classes & biological activities, antigenic determinants on Ig, B cell receptor.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex4-1",
    "s": "r",
    "t": "Unit I finish + Labs 5–6",
    "d": "S3, S4 & Reference classes; matrix & array operations. Lab 5 (factors) + Lab 6 (list with vectors, matrix, function).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-13-100",
    "s": "ml",
    "t": "Lab block — ML lab 2: Candidate-Elimination (CSV)",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-13-101",
    "s": "r",
    "t": "Lab block — R lab 2: labelled matrices",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-13-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-13-201",
    "s": "cloud",
    "t": "Cloud — S3 static site",
    "d": "upload one of your sites, bucket policy, test the URL",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "an-2026-11-13-202",
    "s": "cloud",
    "t": "Cloud — CS50P L1 problem set, part 1",
    "d": "",
    "m": 75,
    "kind": "study"
   }
  ],
  "2026-11-14": [
   {
    "id": "ex5-0",
    "s": "ip",
    "t": "Topic 2 — Client-side programming",
    "d": "JS frameworks & libraries, DOM model, regular expressions, form validation, TypeScript, WebAssembly, serverless JS, DHTML, AJAX (client-server arch, XMLHttpRequest, callbacks), JSON syntax & functions.",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex5-1",
    "s": "imm",
    "t": "Unit II — Monoclonals, cytokines, complement",
    "d": "Monoclonal antibodies (hybridoma steps), cytokines, complement system (classical / alternative / lectin pathways — make a flowchart).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex5-2",
    "s": "ml",
    "t": "Labs 5–8",
    "d": "K-NN, Naive Bayes (confusion matrix + accuracy), Logistic Regression, Linear Regression.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-14-100",
    "s": "ip",
    "t": "Lab block — IP template step 2",
    "d": "DB schema (users, items, issues) + connection code; insert a test row. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 60,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-14-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-14-201",
    "s": "cloud",
    "t": "Cloud — CS50P L1 problem set, part 2",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-14-202",
    "s": "cloud",
    "t": "Cloud — Python practice set 2",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-15": [
   {
    "id": "ex6-0",
    "s": "r",
    "t": "Unit II — Loops & control",
    "d": "for(), while(), control statements, looping over non-vector sets, if-else, arithmetic & Boolean operators. Lab 7 (factors of a number, random ints, FizzBuzz).",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "ex6-1",
    "s": null,
    "t": "Week 1 catch-up",
    "d": "Finish anything left from this week. Skim your Week-1 notes once. If you're on track — take the rest of the day off.",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-15-100",
    "s": "ml",
    "t": "Lab block — ML lab 3: ID3 decision tree",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-15-101",
    "s": "r",
    "t": "Lab block — R lab 3: 3D array",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-15-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-15-201",
    "s": "cloud",
    "t": "Cloud — Read the AWS bill line by line; write 5 lines on what each line is",
    "d": "",
    "m": 30,
    "kind": "study"
   },
   {
    "id": "an-2026-11-15-202",
    "s": "cloud",
    "t": "Cloud — CS50P L2 Loops",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-15-203",
    "s": "cloud",
    "t": "Cloud — CS50P L2 problem set",
    "d": "",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "an-2026-11-15-204",
    "s": "cloud",
    "t": "Cloud — CLF course hour 1 + click-along lab, part 1",
    "d": "",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-16": [
   {
    "id": "ex7-0",
    "s": "imm",
    "t": "Unit III — Ag-Ab interactions I",
    "d": "Antibody affinity & avidity, precipitation reactions, agglutination reactions.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex7-1",
    "s": "r",
    "t": "Unit II — Functions & recursion",
    "d": "Default argument values, return values, when to call return explicitly, returning complex objects, functions are objects, no pointers in R, recursion. Labs 8–9.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-16-100",
    "s": "ml",
    "t": "Lab block — ML lab 4: ANN + Backpropagation",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-16-101",
    "s": "r",
    "t": "Lab block — R lab 4: arrays from vectors + dimnames",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-16-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-16-201",
    "s": "cloud",
    "t": "Cloud — CLF course hour 1 + click-along lab, part 2",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-16-202",
    "s": "cloud",
    "t": "Cloud — Python practice set 3",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-16-203",
    "s": "cloud",
    "t": "Cloud — CS50P L3 Exceptions",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-16-204",
    "s": "cloud",
    "t": "Cloud — CLF course hour 2 + click-along lab, part 1",
    "d": "",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-17": [
   {
    "id": "ex8-0",
    "s": "ip",
    "t": "Topic 3a — Server-side I",
    "d": "Microservices with Spring Boot + Java Servlets, form GET vs POST, session handling, cookies, serverless (AWS Lambda, Google Cloud Run).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex8-1",
    "s": "ml",
    "t": "Labs 9–10",
    "d": "Linear vs Polynomial Regression comparison; Expectation-Maximization (EM) algorithm.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-17-100",
    "s": "ip",
    "t": "Lab block — IP template step 3",
    "d": "Admin CRUD: add / update / delete item (PHP or JSP+Servlet). Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 90,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-17-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-17-201",
    "s": "cloud",
    "t": "Cloud — CLF course hour 2 + click-along lab, part 2",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-17-202",
    "s": "cloud",
    "t": "Cloud — CS50P L3 problem set",
    "d": "",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "an-2026-11-17-203",
    "s": "cloud",
    "t": "Cloud — Python practice set 4",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-18": [
   {
    "id": "ex9-0",
    "s": "imm",
    "t": "Unit III — Immuno techniques",
    "d": "RIA, ELISA, Western blotting, immunoprecipitation, immunofluorescence, immunoelectron microscopy, flow cytometry. Make ONE table: principle / steps / use.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex9-1",
    "s": "r",
    "t": "Unit III — Data frames & files",
    "d": "Making & working with data frames, reshaping, melt & cast, merging, reading/writing files. Labs 10–11 (exam_data, read .csv).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-18-100",
    "s": "ml",
    "t": "Lab block — ML lab 5: K-NN",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-18-101",
    "s": "r",
    "t": "Lab block — R lab 5: factors",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-18-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-18-201",
    "s": "cloud",
    "t": "Cloud — CLF course hour 3 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-18-202",
    "s": "cloud",
    "t": "Cloud — CS50P L4 Libraries",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-18-203",
    "s": "cloud",
    "t": "Cloud — CS50P L4 problem set, part 1",
    "d": "",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-19": [
   {
    "id": "ex10-0",
    "s": "ip",
    "t": "Topic 3b — Server-side II",
    "d": "JDBC (write one full JDBC program), JSP, JSTL, GraphQL, AI chatbots in web apps.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex10-1",
    "s": "imm",
    "t": "Unit III — MHC",
    "d": "MHC classes, antigen processing & presentation (cytosolic vs endocytic pathway — draw both).",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-19-100",
    "s": "ip",
    "t": "Lab block — IP template step 4",
    "d": "User side: search + view details + 'my history' page. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 90,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-19-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-19-201",
    "s": "cloud",
    "t": "Cloud — CS50P L4 problem set, part 2",
    "d": "",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-19-202",
    "s": "cloud",
    "t": "Cloud — CLF course hour 4 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-19-203",
    "s": "cloud",
    "t": "Cloud — Python practice set 5",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-20": [
   {
    "id": "ex11-0",
    "s": "r",
    "t": "Unit III labs",
    "d": "Labs 12–14: airquality melt/cast + monthly averages, combine arrays row-wise, ChickWeight sort/melt/cast by Diet.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex11-1",
    "s": "ml",
    "t": "Labs 11–13",
    "d": "Credit Score Classification, Iris classification using KNN, Car Price Prediction.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-20-100",
    "s": "ml",
    "t": "Lab block — ML lab 6: Naive Bayes + confusion matrix",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-20-101",
    "s": "r",
    "t": "Lab block — R lab 6: list of vectors/matrix/function",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-20-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-20-201",
    "s": "cloud",
    "t": "Cloud — CS50P L5 Unit tests",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-20-202",
    "s": "cloud",
    "t": "Cloud — Cloud portfolio site skeleton (your design), part 1",
    "d": "",
    "m": 105,
    "kind": "study"
   }
  ],
  "2026-11-21": [
   {
    "id": "ex12-0",
    "s": "ip",
    "t": "Topic 4 — PHP & XML",
    "d": "PHP variables, program control, built-in functions, form validation, regex, Laravel & Symfony (MVC), DB connection. XML Schema, XML DOM, parsers & validation, XSL/XSLT, JSON-LD.",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex12-1",
    "s": "imm",
    "t": "Unit IV — T cells",
    "d": "T cell receptor, T cell maturation (thymus selection), activation & differentiation (Th1/Th2/Tc etc.).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex12-2",
    "s": "r",
    "t": "Unit IV — Univariate EDA",
    "d": "Types of EDA (graphical/quantitative, uni/bivariate), mean/median/mode, min/max/range, quartiles, variance, SD, skewness, kurtosis. Lab 15 (iris EDA).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-21-100",
    "s": "ip",
    "t": "Lab block — IP template step 5",
    "d": "Session handling: login state, logout, protect admin pages. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 60,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-21-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-21-201",
    "s": "cloud",
    "t": "Cloud — Cloud portfolio site skeleton (your design), part 2",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-21-202",
    "s": "cloud",
    "t": "Cloud — CS50P L5 problem set, part 1",
    "d": "",
    "m": 60,
    "kind": "study"
   }
  ],
  "2026-11-22": [
   {
    "id": "ex13-0",
    "s": "imm",
    "t": "Unit IV — B cells",
    "d": "B cell generation, activation & differentiation, cell-mediated effector responses.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "ex13-1",
    "s": null,
    "t": "Week 2 catch-up",
    "d": "Finish leftovers. Re-read your Unit I–II Immunology tables. Rest if on track.",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-22-100",
    "s": "ml",
    "t": "Lab block — ML lab 7: Logistic Regression",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-22-101",
    "s": "r",
    "t": "Lab block — R lab 7: factors of n, random ints, FizzBuzz",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-22-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-22-201",
    "s": "cloud",
    "t": "Cloud — CS50P L5 problem set, part 2",
    "d": "",
    "m": 30,
    "kind": "study"
   },
   {
    "id": "an-2026-11-22-202",
    "s": "cloud",
    "t": "Cloud — Python practice set 6",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-22-203",
    "s": "cloud",
    "t": "Cloud — IAM lab",
    "d": "user, group, role, MFA; stop using root",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-22-204",
    "s": "cloud",
    "t": "Cloud — CS50P L6 File I/O",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-22-205",
    "s": "cloud",
    "t": "Cloud — CS50P L6 problem set, part 1",
    "d": "",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-11-23": [
   {
    "id": "ex14-0",
    "s": "ip",
    "t": "Topic 5 — Web services",
    "d": "AI-powered web services (REST & SOAP), WSDL, testing/describing & consuming a web service, DB-driven web service, SOAP, 5G & edge computing, WebSockets, blockchain in healthcare web services.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex14-1",
    "s": "r",
    "t": "Unit IV — Bivariate EDA",
    "d": "Crosstabs, covariance, correlation. Lab 16 (USArrests stats, correlation & plots).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-23-100",
    "s": "ml",
    "t": "Lab block — ML lab 8: Linear Regression",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-23-101",
    "s": "r",
    "t": "Lab block — R lab 8: normal random numbers + counts",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-23-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-23-201",
    "s": "cloud",
    "t": "Cloud — CS50P L6 problem set, part 2",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-23-202",
    "s": "cloud",
    "t": "Cloud — CLF course hour 5 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-23-203",
    "s": "cloud",
    "t": "Cloud — Python practice set 7",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-24": [
   {
    "id": "ex15-0",
    "s": "imm",
    "t": "Unit V — Inflammation & hypersensitivity",
    "d": "Leukocyte migration & inflammation, hypersensitivity Types I–IV (table: mediator / timing / example).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex15-1",
    "s": "ml",
    "t": "Labs 14–17",
    "d": "House price prediction, Iris with Naive Bayes, compare classification algorithms, Mobile price prediction.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-24-100",
    "s": "ip",
    "t": "Lab block — IP template step 6",
    "d": "Variant: booking flow (search → select → book → cancel) on the same template. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 90,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-24-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-24-201",
    "s": "cloud",
    "t": "Cloud — CS50P L7 Regular expressions",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-24-202",
    "s": "cloud",
    "t": "Cloud — CLF course hour 6 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-24-203",
    "s": "cloud",
    "t": "Cloud — CS50P L7 problem set, part 1",
    "d": "",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-25": [
   {
    "id": "ex16-0",
    "s": "r",
    "t": "Unit V — Plotting",
    "d": "High-level plots (box, bar, pie, histogram, line, scatter), low-level & interactive functions, lattice, ggplot2, visualizing distributions, saving graphs. Labs 17–18.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex16-1",
    "s": "imm",
    "t": "Unit V — Infection & vaccines",
    "d": "Immune response to infectious diseases (bacteria/virus/parasite), vaccines (types + how they protect).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-25-100",
    "s": "ml",
    "t": "Lab block — ML lab 9: Linear vs Polynomial Regression",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-25-101",
    "s": "r",
    "t": "Lab block — R lab 9: empty plots with axis limits",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-25-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-25-201",
    "s": "cloud",
    "t": "Cloud — CS50P L7 problem set, part 2",
    "d": "",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-25-202",
    "s": "cloud",
    "t": "Cloud — Python practice set 8",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-25-203",
    "s": "cloud",
    "t": "Cloud — CLF course hour 7 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   }
  ],
  "2026-11-26": [
   {
    "id": "ex17-0",
    "s": "r",
    "t": "Unit V — Regression",
    "d": "Simple linear, multiple, logistic, Poisson regression. Labs 19–21 (advertising, ChickWeight multiple regression, iris logistic + confusion matrix).",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "ex17-1",
    "s": "ml",
    "t": "Labs 18–20 all ML labs done",
    "d": "Perceptron Iris classification, Naive Bayes bank loan prediction, future sales prediction.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-26-100",
    "s": "ip",
    "t": "Lab block — IP template step 7",
    "d": "Variant: billing/calculation (EB slabs, fines, tax slabs) on the same template. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 90,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-26-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-26-201",
    "s": "cloud",
    "t": "Cloud — CS50P L8 OOP",
    "d": "lecture",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-26-202",
    "s": "cloud",
    "t": "Cloud — CS50P L8 problem set",
    "d": "",
    "m": 90,
    "kind": "study"
   }
  ],
  "2026-11-27": [
   {
    "id": "ex18-0",
    "s": "ip",
    "t": "Lab — build your master template",
    "d": "Most IP lab questions are the same skeleton: Login + Register + Admin CRUD (add/update/delete) + user search/view + DB. Build it once with HTML/CSS/JS validation + JSP/Servlet or PHP + DB, using the Library system as the example.",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex18-1",
    "s": "imm",
    "t": "Revision — Units I & II",
    "d": "Rewrite comparison tables from memory, redraw Ig structure + lymphoid organs, write 5 likely 2-mark answers.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-27-100",
    "s": "ml",
    "t": "Lab block — ML lab 10: Expectation-Maximization",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-27-101",
    "s": "r",
    "t": "Lab block — R lab 10: exam_data data frame ops",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-27-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-27-201",
    "s": "cloud",
    "t": "Cloud — CLF course hour 8 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-27-202",
    "s": "cloud",
    "t": "Cloud — Python practice set 9",
    "d": "5 small exercises, trace them on pythontutor.com",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-27-203",
    "s": "cloud",
    "t": "Cloud — EC2 + nginx lab",
    "d": "launch, SSH, install, serve a page, terminate, part 1",
    "m": 60,
    "kind": "study"
   }
  ],
  "2026-11-28": [
   {
    "id": "ex19-0",
    "s": "ip",
    "t": "Lab — booking & billing types",
    "d": "Adapt your template to (a) a booking system (hotel/bus/train/flight/salon: search → select → book → cancel) and (b) a calculation system (EB bill slabs, phone bill fine, income tax slabs).",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex19-1",
    "s": "imm",
    "t": "Revision — Unit III",
    "d": "Techniques table from memory (ELISA, RIA, Western blot, flow cytometry…), MHC pathway diagrams.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "ex19-2",
    "s": "r",
    "t": "Revision — rerun labs 1–11",
    "d": "Retype the code without looking. Mark any you got stuck on.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-28-100",
    "s": "ip",
    "t": "Lab block — IP template step 8",
    "d": "Rebuild the whole template from a blank folder, timed, 90 min. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 60,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-28-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-28-201",
    "s": "cloud",
    "t": "Cloud — EC2 + nginx lab",
    "d": "launch, SSH, install, serve a page, terminate, part 2",
    "m": 30,
    "kind": "study"
   },
   {
    "id": "an-2026-11-28-202",
    "s": "cloud",
    "t": "Cloud — Write-up #1",
    "d": "“my first server” (+ portfolio entry), part 1",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-11-29": [
   {
    "id": "ex20-0",
    "s": "ml",
    "t": "Quick lab recap",
    "d": "For each of the 20 ML labs, write: algorithm name, library used, 3 key lines of code, output metric. One page total.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "ex20-1",
    "s": null,
    "t": "Week 3 catch-up",
    "d": "Finish leftovers + rest. You're almost there ",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-11-29-100",
    "s": "ml",
    "t": "Lab block — ML lab 11: Credit Score Classification",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-29-101",
    "s": "r",
    "t": "Lab block — R lab 11: read a .csv",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 45,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-29-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-29-201",
    "s": "cloud",
    "t": "Cloud — Write-up #1",
    "d": "“my first server” (+ portfolio entry), part 2",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-29-202",
    "s": "cloud",
    "t": "Cloud — CLF course hour 9 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-29-203",
    "s": "cloud",
    "t": "Cloud — CLF course hour 10 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-29-204",
    "s": "cloud",
    "t": "Cloud — CLF practice exam #1 + wrong-answer review",
    "d": "",
    "m": 90,
    "kind": "study"
   }
  ],
  "2026-11-30": [
   {
    "id": "ex21-0",
    "s": "imm",
    "t": "Revision — Units IV & V",
    "d": "T/B cell maturation flowcharts, hypersensitivity table, vaccine types. Then a 45-min self-test (write 3 long answers).",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex21-1",
    "s": "ip",
    "t": "Revision — Topics 1–3",
    "d": "HTTP messages, HTML5/CSS3 features, DOM + AJAX + JSON, servlets, sessions/cookies, JDBC, JSP.",
    "m": 75,
    "kind": "study"
   },
   {
    "id": "an-2026-11-30-100",
    "s": "ml",
    "t": "Lab block — ML lab 12: Iris with KNN",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 30,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-30-101",
    "s": "r",
    "t": "Lab block — R lab 12: airquality melt/cast",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 30,
    "kind": "lab"
   },
   {
    "id": "an-2026-11-30-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-11-30-201",
    "s": "cloud",
    "t": "Cloud — CLF course hour 11 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-11-30-202",
    "s": "cloud",
    "t": "Cloud — CLF course hour 12 + click-along lab, part 1",
    "d": "",
    "m": 45,
    "kind": "study"
   }
  ],
  "2026-12-01": [
   {
    "id": "ex22-0",
    "s": "r",
    "t": "Revision — rerun labs 12–21 + theory",
    "d": "Retype labs 12–21. Skim Units I–V notes; list functions you must remember (melt, cast, merge, summary, cor, lm, glm…).",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex22-1",
    "s": "ip",
    "t": "Revision — Topics 4–5",
    "d": "PHP basics, XML/XSLT, web services, WSDL, SOAP vs REST, WebSockets.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-12-01-100",
    "s": "ip",
    "t": "Lab block — IP template step 9",
    "d": "Rebuild variant (booking) from blank, timed. Type it, don't paste. Save it in a folder you can re-open in the exam.",
    "m": 60,
    "kind": "lab"
   },
   {
    "id": "an-2026-12-01-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-12-01-201",
    "s": "cloud",
    "t": "Cloud — CLF course hour 12 + click-along lab, part 2",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-12-01-202",
    "s": "cloud",
    "t": "Cloud — CLF course hour 13 + click-along lab",
    "d": "",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-12-01-203",
    "s": "cloud",
    "t": "Cloud — CloudFront in front of S3 + HTTPS certificate (ACM), part 1",
    "d": "",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-02": [
   {
    "id": "ex23-0",
    "s": null,
    "t": "Mock day",
    "d": "One timed self-test each for Immunology and Internet Programming (1 hr each). Check answers against notes.",
    "m": 120,
    "kind": "study"
   },
   {
    "id": "ex23-1",
    "s": "ml",
    "t": "Viva prep",
    "d": "Explain each ML algorithm out loud in 30 seconds (FIND-S, Candidate-Elim, ID3, Backprop, KNN, NB, LR, EM, Perceptron).",
    "m": 45,
    "kind": "study"
   },
   {
    "id": "an-2026-12-02-100",
    "s": "ml",
    "t": "Lab block — ML lab 13: Car Price Prediction",
    "d": "Retype from a blank file, no copy-paste. Run it. Write the 3 key lines + output metric in your one-page lab sheet.",
    "m": 30,
    "kind": "lab"
   },
   {
    "id": "an-2026-12-02-101",
    "s": "r",
    "t": "Lab block — R lab 13: combine arrays row-wise",
    "d": "Retype from a blank script, run it, note the function names you had to look up.",
    "m": 30,
    "kind": "lab"
   },
   {
    "id": "an-2026-12-02-200",
    "s": "cloud",
    "t": "Cloud — Linux Journey",
    "d": "",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-12-02-201",
    "s": "cloud",
    "t": "Cloud — CloudFront in front of S3 + HTTPS certificate (ACM), part 2",
    "d": "",
    "m": 60,
    "kind": "study"
   }
  ],
  "2026-12-03": [
   {
    "id": "ex24-0",
    "s": null,
    "t": "Light day — formula & diagram sheets",
    "d": "Skim your one-page sheets for all 4 subjects. Focus on the subject of your FIRST exam. No new topics.",
    "m": 90,
    "kind": "study"
   },
   {
    "id": "ex24-1",
    "s": null,
    "t": "Prep & sleep early",
    "d": "Pack hall ticket, pens, ID, calculator. Sleep by 10:30 pm ",
    "m": 15,
    "kind": "study"
   },
   {
    "id": "an-2026-12-03-200",
    "s": "cloud",
    "t": "Cloud — exam-period minimum",
    "d": "One CLF course hour or one small Python exercise. 30 minutes, then stop.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-04": [
   {
    "id": "an-2026-12-04-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-05": [
   {
    "id": "an-2026-12-05-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-06": [
   {
    "id": "an-2026-12-06-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-07": [
   {
    "id": "an-2026-12-07-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-08": [
   {
    "id": "an-2026-12-08-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-09": [
   {
    "id": "an-2026-12-09-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-10": [
   {
    "id": "an-2026-12-10-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-11": [
   {
    "id": "an-2026-12-11-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-12": [
   {
    "id": "an-2026-12-12-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-13": [
   {
    "id": "an-2026-12-13-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-14": [
   {
    "id": "an-2026-12-14-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-15": [
   {
    "id": "an-2026-12-15-1",
    "s": "cloud",
    "t": "Cloud — exam-period minimum (skip on an exam day)",
    "d": "One CLF course hour or one small Python exercise. If today is an exam, do nothing; the streak can take a 10-minute flashcard pass if you want it.",
    "m": 30,
    "kind": "study"
   }
  ],
  "2026-12-16": [
   {
    "id": "an-2026-12-16-1",
    "s": null,
    "t": "Day off",
    "d": "Last exam done (if Dec 15 was it). Fully off. Tomorrow: open the Plan 4 synced document, Dec 16–20 row.",
    "m": 15,
    "kind": "catchup"
   }
  ],
  "2026-12-17": [
   {
    "id": "an-2026-12-17-0",
    "s": "cloud",
    "t": "Cloud — CLF course hour 14 + click-along lab",
    "d": "Carried over from before exams.",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-12-17-1",
    "s": "cloud",
    "t": "Cloud — Lab",
    "d": "S3 lifecycle rule + CloudWatch alarm",
    "m": 60,
    "kind": "study"
   },
   {
    "id": "an-2026-12-17-2",
    "s": "cloud",
    "t": "Cloud — VPC lab part 1",
    "d": "VPC, public/private subnets, IGW, route tables, one instance each",
    "m": 120,
    "kind": "study"
   },
   {
    "id": "an-2026-12-17-3",
    "s": "cloud",
    "t": "Cloud — CLF practice exam #2 + wrong-answer review",
    "d": "Carried over from before exams.",
    "m": 90,
    "kind": "study"
   }
  ]
 },
 "done": {},
 "created": "2026-11-11",
 "hidden": true,
 "note": "Personal plan. Uni tasks from the Dec 2026 Exams plan + a daily 1.5 h lab block (ML/R retyping, IP template) + Plan 4 cloud tasks (3 h weekdays, 1.5 h Sat, 4 h Sun). Exams assumed Dec 4–15."
}
];
