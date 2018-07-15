/**
 * Defines information to be displayed in tables across the site. 
 * Makes Table code much cleaner to have the constants here instead.
 */

// Project Table ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let projectHeaders = ['Project Name', 'Language', 'Description', 'More Info'];

let pipe = ['Pipe Game', 'C++', 'A 2D time-based puzzle game'];
let music = ['Music Editor', 'Java', 'Program to create, load, display, and play proprietary music files'];
let nush = ['Nush Shell', 'C', 'A simple shell that can execute commands utilizing parallel programming.'];

const projectMatrix = [
    projectHeaders,
    pipe,
    music,
    nush,
]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Classes Table ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let classHeaders = ['Class', 'Primary Language', 'Description'];

let ood = ['Object Oriented Design', 'Java',     'Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs. subtyping. Fosters a deeper understanding of the principles of object-oriented programming and design including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Basic concepts in object-oriented design are illustrated with case studies in application frameworks and by writing programs in one or more object-oriented languages.'];
let algo = ['Algorithms & Data', 'Java/Psuedocode',     'Introduces the basic principles and techniques for the design, analysis, and implementation of efficient algorithms and data representations. Discusses asymptotic analysis and formal methods for establishing the correctness of algorithms. Considers divide-and-conquer algorithms, graph traversal algorithms, and optimization techniques. Introduces information theory and covers the fundamental structures for representing data. Examines flat and hierarchical representations, dynamic data representations, and data compression. Concludes with a discussion of the relationship of the topics in this course to complexity theory and the notion of the hardness of problems.']
let cpp = ['Programming in C++', 'C++',     'Examines how to program in C++ in a robust and safe manner. Reviews basics, including scoping, typing, and primitive data structures. Discusses data types (primitive, array, structure, class, string); addressing/parameter mechanisms (value, pointer, reference); stacks; queues; linked lists; binary trees; hash tables; and the design of classes and class inheritance, emphasizing single inheritance. Considers the instantiation of objects, the trade-offs of stack vs. heap allocation, and the design of constructors and destructors. Emphasizes the need for a strategy for dynamic memory management. Addresses function and operator overloading; templates, the Standard Template Library (STL), and the STL components (containers, generic algorithms, iterators, adaptors, allocators, function objects); streams; exception handling; and system calls for processes and threads. '];
let compsys = ['Computer Systems', 'C', 'Introduces the basic design of computing systems, computer operating systems, and assembly language using a RISC architecture. Describes caches and virtual memory. Covers the interface between assembly language and high-level languages, including call frames and pointers. Covers the use of system calls and systems programming to show the interaction with the operating system. Covers the basic structures of an operating system, including application interfaces, processes, threads, synchronization, interprocess communication, deadlock, memory management, file systems, and input/output control.'];
let discrete = ['Discrete Mathematics', 'N/A', 'Introduces the mathematical structures and methods that form the foundation of computer science. Studies structures such as sets, tuples, sequences, lists, trees, and graphs. Discusses functions, relations, ordering, and equivalence relations. Examines inductive and recursive definitions of structures and functions. Discusses principles of proof such as truth tables, inductive proof, and basic logic. Also covers the counting techniques and arguments needed to estimate the size of sets, the growth of functions, and the space-time complexity of algorithms.'];
let logic = ['Logic & Computation', 'ACL2s', 'Introduces formal logic and its connections to computer and information science. Offers an opportunity to learn to translate statements about the behavior of computer programs into logical claims and to gain the ability to prove such assertions both by hand and using automated tools. Considers approaches to proving termination, correctness, and safety for programs. Discusses notations used in logic, propositional and first order logic, logical inference, mathematical induction, and structural induction. Introduces the use of logic for modeling the range of artifacts and phenomena that arise in computer and information science.'];
let fundies1 = ['Fundamentals of Comp. Sci. 1', 'Racket', 'Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline.'];
let fundies2 = ['Fundamentals of Comp. Sci. 2', 'Java', 'Examines object-oriented programming and associated algorithms using more complex data structures as the focus. Discusses nested structures and nonlinear structures including hash tables, trees, and graphs. Emphasizes abstraction, encapsulation, inheritance, polymorphism, recursion, and object-oriented design patterns. Applies these ideas to sample applications that illustrate the breadth of computer science.'];

const classMatrix = [
    classHeaders,
    ood,
    algo,
    cpp,
    compsys,
    discrete,
    logic,
    fundies2,
    fundies1,
]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export { projectMatrix, classMatrix }