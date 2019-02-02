/**
 * Defines information to be displayed in tables across the site. 
 * Makes Table code much cleaner to have the constants here instead.
 */

// Project Table ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const projectHeaders = ['Project Name', 'Language', 'Description', ''];
const projectHeaders = [{value: 'Project Name'}, {value: 'Language'}, {value: 'Description', span: 2}];

const pipe = ['Pipe Game', 'C++', 'A 2D time-based puzzle game'];
const music = ['Music Editor', 'Java', 'Program to create, load, display, and play proprietary music files'];
const nush = ['Nush Shell', 'C', 'A simple shell that can execute commands utilizing parallel programming'];
const tetris = ['Racket Tetris', 'Racket', 'A Tetris game made with the 2htdp library'];
const web = ['Website', 'JavaScript/React', 'You\'re looking at it!'];

const projectMatrix = [
    projectHeaders,
    pipe,
    music,
    nush,
    tetris,
    web,
];

const projectNames = [
    'pipes',
    'music',
    'nush',
    'tetris',
    'web',
];

// Project Details ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const pipeTech = ['SDL graphics', 'SDL mixer for audio', 'SDL timer for tick events', 'Smart pointers (C++11)'];
const pipeDetails = ['"Difficulty" settings', 'Windows/Linux Compatible', 'Fun win/lose sounds'];

const musicTech = ['Implements Model/View/Controller build pattern', 'AWT graphics', 'Audio using Java Midi library'];
const musicDetails = ['Includes prewritten music files', 'Interactive GUI to craft music pieces (click piano keyboard to add note)', 'Can pause/resume playback and scrub back/forth'];

const nushTech = ['Uses fork-exec pattern to execute commands in parallel', 'Utilizes tokenizer and user defined types to store/exec commands', 'Builds with Make'];
const nushDetails = ['Ability to read bash script from file', 'Runs all simple operators (no parens)'];

const tetrisTech = ['Written in Racket language (Lisp/Scheme dialect)', 'Uses 2htdp library to create visual elements', 'Uses big-bang and on-tick functions to step through states of the world object'];
const tetrisDetails = ['First major project at university', 'Uses lambda functions', 'Check-expect testing suite for all world states including all edge cases'];

const webTech = ['Used React JavaScript framework to create components such for tables, pages, header and footer', 'React-router and express'];
const webDetails = ['My first website!', 'Created in my free time using skills I learned on the job at my first co-op'];

const pipeDetailedInfo = {
    tech: pipeTech,
    details: pipeDetails,
    gif: require('../../../assets/images/pipes.gif'),
    gitUrl: 'https://github.com/costaste/Pipe_Game',
}

const musicDetailedInfo = {
    tech: musicTech,
    details: musicDetails,
    gif: require('../../../assets/images/music.gif'),
    gitUrl: 'https://github.com/costaste/Unix_Shell',
}

const nushDetailedInfo = {
    tech: nushTech,
    details: nushDetails,
    gif: require('../../../assets/images/nush.gif'),
    gitUrl: 'https://github.com/costaste/Unix_Shell',
}

const tetrisDetailedInfo = {
    tech: tetrisTech,
    details: tetrisDetails,
    gif: require('../../../assets/images/tetris.gif'),
    gitUrl: 'https://github.com/costaste/Racket_Tetris',
}

const webDetailedInfo = {
    tech: webTech,
    details: webDetails,
    gif: require('../../../assets/images/web.gif'),
    gitUrl: 'https://github.com/costaste/website',
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Classes Table ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const classHeaders = [{value: 'Class'}, {value: 'Primary Language'}, {value: 'Description'}];

const ood = ['Object Oriented Design', 'Java',     'Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, meta-class, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse: forwarding vs. delegation and subclassing vs. subtyping. Fosters a deeper understanding of the principles of object-oriented programming and design including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Basic concepts in object-oriented design are illustrated with case studies in application frameworks and by writing programs in one or more object-oriented languages.'];
const algo = ['Algorithms & Data', 'Java/Psuedocode',     'Introduces the basic principles and techniques for the design, analysis, and implementation of efficient algorithms and data representations. Discusses asymptotic analysis and formal methods for establishing the correctness of algorithms. Considers divide-and-conquer algorithms, graph traversal algorithms, and optimization techniques. Introduces information theory and covers the fundamental structures for representing data. Examines flat and hierarchical representations, dynamic data representations, and data compression. Concludes with a discussion of the relationship of the topics in this course to complexity theory and the notion of the hardness of problems.'];
const networks = ['Networks and Distributed Systems', 'Python', 'Introduces the fundamentals of computer networks, including network architectures, network topologies, network protocols, layering concepts (for example, ISO/OSI, TCP/IP reference models), communication paradigms (point-to-point vs. multicast/broadcast, connectionless vs. connection oriented), and networking APIs (sockets). Also covers the construction of distributed programs, with an emphasis on high-level protocols and distributed state sharing. Topics include design patterns, transactions, performance trade-offs, security implications, and reliability. Uses examples from real networks (TCP/IP, Ethernet, 802.11) and distributed systems (Web, BitTorrent, DNS) to reinforce concepts.'];
const embedded = ['Embedded Design: Enabling Robotics', 'C++', 'Offers an integrated lecture/lab course that covers the basics of the Unix operating system, high-level programming concepts, introductory digital design, wireless networking, and Simulink design. Offers students a hands-on experience developing a remote-controlled robotic arm using an embedded systems platform.'];
const cpp = ['Programming in C++', 'C++',     'Examines how to program in C++ in a robust and safe manner. Reviews basics, including scoping, typing, and primitive data structures. Discusses data types (primitive, array, structure, class, string); addressing/parameter mechanisms (value, pointer, reference); stacks; queues; linked lists; binary trees; hash tables; and the design of classes and class inheritance, emphasizing single inheritance. Considers the instantiation of objects, the trade-offs of stack vs. heap allocation, and the design of constructors and destructors. Emphasizes the need for a strategy for dynamic memory management. Addresses function and operator overloading; templates, the Standard Template Library (STL), and the STL components (containers, generic algorithms, iterators, adaptors, allocators, function objects); streams; exception handling; and system calls for processes and threads. '];
const compsys = ['Computer Systems', 'C', 'Introduces the basic design of computing systems, computer operating systems, and assembly language using a RISC architecture. Describes caches and virtual memory. Covers the interface between assembly language and high-level languages, including call frames and pointers. Covers the use of system calls and systems programming to show the interaction with the operating system. Covers the basic structures of an operating system, including application interfaces, processes, threads, synchronization, interprocess communication, deadlock, memory management, file systems, and input/output control.'];
const compsoc = ['Computers and Society', 'N/A', 'Focuses on the social and political context of technological change and development. Through readings, course assignments, and class discussions, offers students an opportunity to learn to analyze the ways that the internet, artificial intelligence, and other technological advances have required a reworking of every human institution—both to facilitate the development of these technologies and in response to their adoption.'];
const theory = ['Theory of Computation', 'N/A', 'Introduces the theory behind computers and computing aimed at answering the question, “What are the capabilities and limitations of computers?” Covers automata theory, computability, and complexity. The automata theory portion includes finite automata, regular expressions, nondeterminism, nonregular languages, context-free languages, pushdown automata, and noncontext-free languages. The computability portion includes Turing machines, the Church-Turing thesis, decidable languages, and the Halting theorem. The complexity portion includes big-O and small-o notation, the classes P and NP, the P vs. NP question, and NP-completeness.'];
const discrete = ['Discrete Mathematics', 'N/A', 'Introduces the mathematical structures and methods that form the foundation of computer science. Studies structures such as sets, tuples, sequences, lists, trees, and graphs. Discusses functions, relations, ordering, and equivalence relations. Examines inductive and recursive definitions of structures and functions. Discusses principles of proof such as truth tables, inductive proof, and basic logic. Also covers the counting techniques and arguments needed to estimate the size of sets, the growth of functions, and the space-time complexity of algorithms.'];
const logic = ['Logic & Computation', 'ACL2s', 'Introduces formal logic and its connections to computer and information science. Offers an opportunity to learn to translate statements about the behavior of computer programs into logical claims and to gain the ability to prove such assertions both by hand and using automated tools. Considers approaches to proving termination, correctness, and safety for programs. Discusses notations used in logic, propositional and first order logic, logical inference, mathematical induction, and structural induction. Introduces the use of logic for modeling the range of artifacts and phenomena that arise in computer and information science.'];
const fundies1 = ['Fundamentals of Comp. Sci. 1', 'Racket', 'Introduces the fundamental ideas of computing and the principles of programming. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, starting from nothing more than expression evaluation in the spirit of high school algebra. No prior programming experience is assumed; therefore, suitable for freshman students, majors and nonmajors alike who wish to explore the intellectual ideas in the discipline.'];
const fundies2 = ['Fundamentals of Comp. Sci. 2', 'Java', 'Examines object-oriented programming and associated algorithms using more complex data structures as the focus. Discusses nested structures and nonlinear structures including hash tables, trees, and graphs. Emphasizes abstraction, encapsulation, inheritance, polymorphism, recursion, and object-oriented design patterns. Applies these ideas to sample applications that illustrate the breadth of computer science.'];

const classMatrix = [
    classHeaders,
    ood,
    algo,
    networks,
    embedded,
    cpp,
    compsys,
    compsoc,
    theory,
    discrete,
    logic,
    fundies2,
    fundies1,
]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export { 
    projectNames, 
    projectMatrix, 
    classMatrix, 
    pipeDetailedInfo, 
    musicDetailedInfo, 
    nushDetailedInfo, 
    tetrisDetailedInfo,
    webDetailedInfo
};
