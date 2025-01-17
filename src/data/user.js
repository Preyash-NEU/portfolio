const INFO = {
	main: {
		title: "Portfolio",
		name: "Preyash Amar Mehta",
		email: "preyash.ja@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/Preyash-NEU",
		linkedin: "https://www.linkedin.com/in/preyash-mehta/",
		instagram: "https://www.instagram.com/pmehta_12/",
	},

	homepage: {
		title: "Namaste! I am a Full Stack Software Developer and an amateur gamer",
		description:
			"Welcome to my world of coding adventures! As a versatile full-stack developer, I wield the powers of programming to craft masterpieces in the digital realm. With a knack for building scalable, secure, and reliable applications, I thrive on unraveling complex problems and conquering new horizons. My passion lies in sculpting high-quality code that dances gracefully with industry standards and best practices. Eager to embrace fresh challenges and opportunities, I'm on a perpetual journey of growth and innovation in the ever-evolving landscape of technology",
	},

	about: {
		title: "Preyash Mehta: Bridging the Gap Between Boston and Pune, One Pixel at a Time!",
		description:
			"Results-oriented software developer with a robust skill set in Full Stack Development. Committed to delivering cutting-edge solutions and optimizing software development processes for enhanced efficiency. Proficient in harnessing Azure DevOps tools and methodologies to streamline the entire software development lifecycle.  As a dedicated student, I have garnered hands-on experience in web technologies and aspire to carve a successful career path in Software Development. My commitment to continuous learning and the adoption of the latest technologies is aimed at contributing to organizational objectives while fostering personal and professional growth. I bring strong expertise in Core Java, ReactJS, MongoDB, Node and Azure DevOps underscoring my capabilities as a versatile and accomplished engineering professional.",
		},

	projects: [
		{
			title: "Cloud Native User Onboarding Web App",
			description:
				"Implemented a complete infrastructure on AWS using Terraform to create a VPC stack, including essential services such as S3, RDS, and SNS, with SES integration through a Lambda function for seamless user verification during signup. Additionally, I established a GitHub Actions CI/CD pipeline for automated testing and building of a custom AMI via Packer, which is deployed on an EC2 instance and managed within an Auto Scaling Group. To ensure robust monitoring and quick issue resolution, I configured CloudWatch alarms to automate responses, significantly improving the mean time to resolution (MTTR).",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakNA2hyn3l8JnCqjYEB6ufwFCTD4VKsm5VA&usqp=CAU",
			linkText: "View Project",
			link: "https://github.com/Preyash-NEU/tf-aws-infra",
		},
		{
			title: "Attendance App - .NET development",
			description:
				"Developed a full-stack College Attendance App, utilizing VB.NET and Microsoft SQL Server to manage attendance for educational institutions efficiently. This desktop application boasts a robust user authentication system to ensure secure access for administrators and faculty, coupled with a well-optimized SQL database schema for swift data retrieval and storage. A significant feature of this app is the real-time attendance tracking and analytics capability, which not only streamlines daily operations but also supports comprehensive long-term reporting and analysis.",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakNA2hyn3l8JnCqjYEB6ufwFCTD4VKsm5VA&usqp=CAU",
			linkText: "View Project",
			link: "https://github.com/Preyash-NEU/CollegeAttendanceApp",
		},
		{
			title: "Home Automation System",
			description:
				"Built a robust and scalable Java-based system for smart device management using multiple design patterns, including Adapter, Bridge, Builder, and Command. The architecture emphasized clean, modular code adhering to principles like the Open/Closed Principle and Dependency Inversion, ensuring flexibility and extensibility. The implementation of key patterns such as State and Observer effectively managed device behavior and facilitated real-time notifications, significantly enhancing system responsiveness and efficiency",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakNA2hyn3l8JnCqjYEB6ufwFCTD4VKsm5VA&usqp=CAU",
			linkText: "View Project",
			link: "https://github.com/Preyash-NEU/HomeAutomationSytem",
		},
		{
			title: "Event-Management Application",
			description:
				"Developed a custom Event Management Web App for university students using MERN stack & Tailwind CSS, enabling seamless event planning and networking. Implemented ReactJS-based front-end for Husky Events with React Router & Hooks, and handled server-side communication via Axios. Ensured security with user authentication, JWT, and a well-structured REST API in Express, ensuring data integrity in MongoDB with bcrypt hashing and CORS.",
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSakNA2hyn3l8JnCqjYEB6ufwFCTD4VKsm5VA&usqp=CAU",
			linkText: "Live Demo",
			link: "https://huskyevents.onrender.com/",
		},

		{
			title: "Voting Application using Blockchain Technology",
			description:
				"Revolutionized e-voting security with a blockchain-based application, ensuring transparency and integrity. Employed SHA-256 encryption for robust data protection and Firebase for SMS authentication to verify voter authenticity. Additionally, collaborated with peers to publish a paper in the prestigious 'International Journal of Research in Engineering, Science, and Management'.",
			logo: "data:image/png;base64,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",
			linkText: "View Project",
			link: "https://www.ijresm.com/Vol.3_2020/Vol3_Iss6_June20/IJRESM_V3_I6_44.pdf",
		},

		{
			title: "Handwriting Pattern Recognition Using Machine Learning",
			description:
				"Researched Support Vector Machine, achieving 92% accuracy in handwriting pattern classification, published in IEEE. Presented findings at academic conferences, exploring applications in forensic handwriting analysis, education, and healthcare. Additionally, investigated the effectiveness of Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) in similar tasks.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/python/python.png",
		},
	],
};

export default INFO;
