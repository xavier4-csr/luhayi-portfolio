// Hardcoded Data - Replace API calls with this data
const HARDCODED_DATA = {
    profile: {
        name: "Luhayi David Eshipira",
        title: "Full Stack Developer",
        intro: "“Passionate full stack developer dedicated to building impactful digital experiences. I thrive on solving complex problems and turning ideas into reality through code.”",
        profile_image: "/assets/images/profile 2.jpg"
    },
    about: {
        journey: "My coding journey began with curiosity and a desire to create. From building simple web pages to architecting full-scale applications, each step has fueled my love for technology and innovation. Over the years, I've embraced new challenges, learned from setbacks, and grown into a developer who values both creativity and precision.",
        interests: "“When I'm not coding, you'll find me exploring emerging tech trends, contributing to open-source projects, or mentoring fellow developers. I enjoy reading about AI, experimenting with new frameworks, and collaborating on creative solutions that make a difference.”"
    },
    personalDetails: {
        name: "Luhayi David Eshipira",
        email: "David.Luhayi@strathmore.edu",
        location: "Langata",
        experience: "2 years"
    },
    skills: {
        technical: [
            { name: "CSS", level: 90 },
            { name: "HTML", level: 90 },
            { name: "JAVA", level: 90 },
            { name: "MYSQL", level: 80 },
            { name: "PHP", level: 80 },
            { name: "Python", level: 80 },
            { name: "Django", level: 75 },
            { name: "Javascript", level: 50 },
            { name: "React", level: 40 },
            { name: "C++", level: 30 }
        ],
        professional: [
            { name: "Backend Development", icon: "server" },
            { name: "Python Programming", icon: "code" },
            { name: "Frontend Development", icon: "globe" },
            { name: "Web Development", icon: "target" },
            { name: "Project Management", icon: "clock" }
        ],
        technologies: [
            { name: "HTML", icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTU4IDMuMTgyaDIxLjY4NEwxMiAyMS44MTggMS4xNTggMy4xODJ6bTIxLjY4NCAzLjE4MnYxMi40NTVsLTEwLjg0MiA5LjE4Mi0xMC44NDItOS4xODJWNi4zNjRMMTIgMThcI.0g2LjY4NEw0LjU4MiA5TTIuNzA3IDcuNzMzbDEuMjMgNC4yOGMxLjE5IDMuNTggMi4zIDUuNjMgMy4zIDcuNjNMMTEuNTg0IDI0bDMuMjM0LTkuNDY2Yy45LTEuNTcgMS44MS0zLjM1IDMuMDg0LTUuNTJsMS4yMy00LjI4TTIxLjQyIDI0bC0xLjgzMy0xLjgzM0wxOS4yIDE5LjVsLTEuNTE3IDQuMTcyTTEyIDkuODc0bDMuNTk0IDUuMTI2YzEuMTY4IDIuMzggMi4zMzQgNC44NSAzLjU5NCA3LjE4NGwxLjgzMyAxLjgzM0w0LjU4MiA5IiBmaWxsPSIjRUY0ODUzIi8+Cjwvc3ZnPgo=" },
            // Add more base64 SVGs or URLs for other tech icons as needed
        ]
    },
    projects: [
        // Featured projects as in HTML
        { title: "Simple Bank System", description: "Make some simple transactions", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop", technologies: ["Django", "Python"], github_url: "https://github.com/yourusername/simple-bank", live_url: "https://yourportfolio.com/simple-bank", category: "web" },
        { title: "Blog App", description: "Blog Django framework to manage posts", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop", technologies: ["Django", "PostgreSQL"], github_url: "https://github.com/yourusername/blog-app", live_url: "https://yourportfolio.com/blog-app", category: "web" },
        { title: "Portfolio Website", description: "A responsive website showcasing work and skills.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop", technologies: ["HTML", "CSS", "JavaScript"], github_url: "https://github.com/yourusername/portfolio", live_url: "https://yourportfolio.com", category: "web" },
        { title: "Task Management App", description: "Mobile app for task tracking and productivity.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop", technologies: ["React Native", "Node.js"], github_url: "https://github.com/yourusername/task-app", live_url: "", category: "mobile" },
        { title: "E-commerce Platform", description: "Full-stack e-commerce solution with payment integration.", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop", technologies: ["React", "Django"], github_url: "https://github.com/yourusername/ecommerce", live_url: "https://yourportfolio.com/ecommerce", category: "web" }
    ],
    experiences: [
        { title: "Bachelor in Business Information Technology", company: "Strathmore University", period: "2025 - Present", description: "Currently learning a whole journey of coding and learning professional skills." },
        { title: "Cashier", company: "Strathmore University", period: "2024 - Present", description: "Managing transactions, ensuring customer experience through smooth payment, work with accounts office." },
        { title: "Diploma in Business Information Technology", company: "Strathmore University", period: "2023 - 2024", description: "Specialized in software engineering and web development. Completed courses in algorithms, databases, and human-computer interaction." },
        { title: "Frontend Developer", company: "Digital Agency", period: "2018 - 2020", description: "Developed applications using React and Vue. Collaborated with designers to implement UI/UX best practices." }
    ],
    contactInfo: {
        email: "David.Luhayi@strathmore.edu",
        phone: "011264278",
        location: "Langata",
        resume_url: "/assets/resume.pdf",
        social: [
            { icon: "github", url: "https://github.com/yourusername" },
            { icon: "linkedin", url: "https://linkedin.com/in/yourusername" }
        ]
    }
};

// Main Application Logic (Adapted for Static - No API)

class PortfolioApp {
    constructor() {
        this.ui = new PortfolioUI();
        this.isLoading = false;
        this.init();
    }

    // Initialize the application
    async init() {
        try {
            // Initialize AOS (Animate On Scroll)
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 100
                });
            }

            // Initialize Vanta.js background
            this.initBackground();

            // Set up event listeners
            this.setupEventListeners();

            // Initialize footer
            this.ui.initializeFooter();

            // Load all hardcoded content
            this.loadAllContent();

        } catch (error) {
            console.error('Failed to initialize portfolio app:', error);
        }
    }

    // Initialize background animation
    initBackground() {
        try {
            if (typeof VANTA !== 'undefined' && VANTA.GLOBE) {
                VANTA.GLOBE({
                    el: "#vanta-bg",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x3b82f6,
                    backgroundColor: 0xf8fafc,
                    size: 0.8
                });
            }
        } catch (error) {
            console.error('Failed to initialize background:', error);
        }
    }

    // Set up event listeners
    setupEventListeners() {
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isHidden = mobileMenu.classList.toggle('hidden');
                const expanded = !isHidden;
                menuBtn.setAttribute('aria-expanded', String(expanded));
                mobileMenu.setAttribute('aria-hidden', String(!expanded));
            });

            // Close mobile menu when clicking a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenu.setAttribute('aria-hidden', 'true');
                });
            });
        }

        // Theme toggle
        this.setupThemeToggle();

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactFormSubmit.bind(this));
        }

        // Load more projects button (static: hide after "load")
        const loadMoreBtn = document.getElementById('load-more-projects');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', this.loadAllProjects.bind(this));
        }

        // Smooth scrolling for navigation links
        this.setupSmoothScrolling();

        // Skills animation observer
        this.setupSkillsObserver();

        // Check for success message from Formspree
        this.checkFormSuccess();
    }

    // Set up theme toggle functionality
    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        
        // Initialize theme from localStorage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        
        this.setTheme(initialTheme);
        
        // Add event listeners
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    // Toggle theme between light and dark
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    // Set theme and save to localStorage
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update theme toggle buttons
        const toggles = document.querySelectorAll('.theme-toggle');
        toggles.forEach(toggle => {
            toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        });
    }

    // Check for Formspree success message
    checkFormSuccess() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            this.ui.showSuccessMessage(document.body, 'Thank you! Your message has been sent successfully.');
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    // Set up smooth scrolling
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Set up skills section observer for animation
    setupSkillsObserver() {
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.ui.animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    // Load all content from hardcoded data
    loadAllContent() {
        this.ui.renderProfile(HARDCODED_DATA.profile);
        this.ui.renderAbout(HARDCODED_DATA.about, HARDCODED_DATA.personalDetails);
        this.ui.renderSkills(HARDCODED_DATA.skills);
        this.ui.renderProjects(HARDCODED_DATA.projects.slice(0, 3)); // Featured
        this.ui.renderExperience(HARDCODED_DATA.experiences);
        this.ui.renderContactInfo(HARDCODED_DATA.contactInfo);
    }

    // Load all projects (static: show all)
    loadAllProjects() {
        const loadMoreBtn = document.getElementById('load-more-projects');
        if (loadMoreBtn) {
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
        }

        setTimeout(() => {
            this.ui.renderProjects(HARDCODED_DATA.projects);
            if (loadMoreBtn) {
                loadMoreBtn.style.display = 'none'; // Hide after loading
            }
        }, 500);
    }

    // Handle contact form submission with Formspree
    async handleContactFormSubmit(e) {
        e.preventDefault();
        
        if (this.isLoading) return;

        const form = e.target;
        const formData = new FormData(form);
        const messageData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Validate form data
        if (!this.validateContactForm(messageData)) {
            return;
        }

        // Set reply-to field for FormSubmit
        const replyToField = form.querySelector('input[name="_replyto"]');
        if (replyToField) {
            replyToField.value = messageData.email;
        }

        this.isLoading = true;
        this.ui.setFormSubmitting(true);

        try {
            // Submit to FormSubmit
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.ui.showSuccessMessage(form, 'Thank you! Your message has been sent successfully.');
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    this.ui.showErrorMessage(form, data.errors.map(error => error.message).join(', '));
                } else {
                    this.ui.showErrorMessage(form, 'Oops! There was a problem sending your message. Please try again.');
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.ui.showErrorMessage(form, 'Oops! There was a problem sending your message. Please try again.');
        } finally {
            this.isLoading = false;
            this.ui.setFormSubmitting(false);
        }
    }

    // Validate contact form
    validateContactForm(data) {
        const errors = [];

        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name is required and must be at least 2 characters.');
        }

        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('A valid email address is required.');
        }

        if (!data.subject || data.subject.trim().length < 5) {
            errors.push('Subject is required and must be at least 5 characters.');
        }

        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message is required and must be at least 10 characters.');
        }

        if (errors.length > 0) {
            const form = document.getElementById('contact-form');
            this.ui.showErrorMessage(form, errors.join(' '));
            return false;
        }

        return true;
    }

    // Email validation helper
    isValidEmail(email) {
        if (!email || typeof email !== 'string') return false;
        const trimmed = email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(trimmed);
    }
}

// UI Component Functions (Adapted - Uses hardcoded data)

class PortfolioUI {
    constructor() {
        this.elements = this.initializeElements();
        this.loadingStates = new Set();
    }

    // Initialize DOM elements
    initializeElements() {
        return {
            // Profile elements
            userName: document.getElementById('user-name'),
            userTitle: document.getElementById('user-title'),
            userIntro: document.getElementById('user-intro'),
            profileImage: document.getElementById('profile-image'),
            
            // Content containers
            aboutContent: document.getElementById('about-content'),
            personalDetails: document.getElementById('personal-details'),
            technicalSkills: document.getElementById('technical-skills'),
            professionalSkills: document.getElementById('professional-skills'),
            technologies: document.getElementById('technologies'),
            projectsContainer: document.getElementById('projects-container'),
            timeline: document.getElementById('timeline'),
            contactInfo: document.getElementById('contact-info'),
            socialLinks: document.getElementById('social-links'),
            footerSocial: document.getElementById('footer-social'),
            footerName: document.getElementById('footer-name'),
            
            // Form elements
            contactForm: document.getElementById('contact-form'),
            downloadResume: document.getElementById('download-resume'),
            
            // Buttons
            loadMoreProjects: document.getElementById('load-more-projects'),
            
            // Footer
            currentYear: document.getElementById('current-year')
        };
    }

    // Render profile information
    renderProfile(profile) {
        if (this.elements.userName) {
            this.elements.userName.textContent = profile.name;
        }
        if (this.elements.userTitle) {
            this.elements.userTitle.textContent = profile.title;
        }
        if (this.elements.userIntro) {
            this.elements.userIntro.textContent = profile.intro;
        }
        if (this.elements.profileImage) {
            this.elements.profileImage.src = profile.profile_image;
            this.elements.profileImage.alt = `Profile photo of ${profile.name}`;
        }
        if (this.elements.footerName) {
            this.elements.footerName.textContent = profile.name;
        }
    }

    // Render about section
    renderAbout(about, personalDetails) {
        if (this.elements.aboutContent) {
            this.elements.aboutContent.innerHTML = `
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">My Journey</h3>
                <p class="text-gray-600 mb-6">${about.journey}</p>
                <p class="text-gray-600 mb-6">${about.interests}</p>
                <div class="flex space-x-4">
                    <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                        <svg class="inline mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        Problem Solver
                    </div>
                    <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                        <svg class="inline mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                        Team Player
                    </div>
                </div>
            `;
        }

        if (this.elements.personalDetails) {
            this.elements.personalDetails.innerHTML = `
                <div class="flex items-center">
                    <svg class="text-blue-600 mr-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <div>
                        <p class="text-gray-500 text-sm">Name</p>
                        <p class="text-gray-800">${personalDetails.name}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <svg class="text-blue-600 mr-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                        <p class="text-gray-500 text-sm">Email</p>
                        <p class="text-gray-800">${personalDetails.email}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <svg class="text-blue-600 mr-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                        <p class="text-gray-500 text-sm">Location</p>
                        <p class="text-gray-800">${personalDetails.location}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <svg class="text-blue-600 mr-4 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                    </svg>
                    <div>
                        <p class="text-gray-500 text-sm">Experience</p>
                        <p class="text-gray-800">${personalDetails.experience}</p>
                    </div>
                </div>
            `;
        }
    }

    // Render skills sections
    renderSkills(skills) {
        // Technical skills - Already hardcoded in HTML for static
        // But animate them
        const bars = document.querySelectorAll('.skill-bar');
        bars.forEach((bar, index) => {
            setTimeout(() => bar.classList.add('animated'), index * 200);
        });

        // Professional skills - Already hardcoded
        // Technologies - Already hardcoded with SVGs
    }

    // Render projects
    renderProjects(projects) {
        if (!this.elements.projectsContainer) return;

        this.elements.projectsContainer.innerHTML = projects.map((project, index) => `
            <div class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300 fade-in" 
                 data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" data-category="${project.category}">
                <div class="h-48 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-gray-800">${project.title}</h3>
                        <div class="flex space-x-2">
                            ${project.github_url ? `
                                <a href="${project.github_url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                                    ${this.getIconSVG('github')}
                                </a>
                            ` : ''}
                            ${project.live_url ? `
                                <a href="${project.live_url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">
                                    ${this.getIconSVG('external-link')}
                                </a>
                            ` : ''}
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                            <span class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render experience timeline
    renderExperience(experiences) {
        if (!this.elements.timeline) return;

        this.elements.timeline.innerHTML = experiences.map((exp, index) => `
            <div class="relative timeline-item pl-8 fade-in" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="timeline-dot"></div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <h3 class="text-xl font-bold text-gray-800">${exp.title}</h3>
                        <span class="text-blue-600 font-medium">${exp.period}</span>
                    </div>
                    <h4 class="text-gray-600 font-medium mb-3">${exp.company}</h4>
                    <p class="text-gray-600">${exp.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Render contact information
    renderContactInfo(contactInfo) {
        // Already hardcoded in HTML
        // Render social links
        this.renderSocialLinks(contactInfo.social);

        // Update resume download link
        if (this.elements.downloadResume && contactInfo.resume_url) {
            this.elements.downloadResume.href = contactInfo.resume_url;
            this.elements.downloadResume.style.display = 'inline-flex';
        }
    }

    // Render social links
    renderSocialLinks(socialLinks) {
        const socialHTML = socialLinks.map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
               class="bg-gray-100 p-3 rounded-full hover:bg-blue-100 transition">
                ${this.getIconSVG(link.icon)}
            </a>
        `).join('');

        if (this.elements.socialLinks) {
            this.elements.socialLinks.innerHTML = socialHTML;
        }
        if (this.elements.footerSocial) {
            this.elements.footerSocial.innerHTML = socialHTML;
        }
    }

    // Animate skill bars
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            bar.classList.add('animated');
        });
    }

    // Show success message
    showSuccessMessage(element, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'success-message';
        messageDiv.innerHTML = `
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            ${message}
        `;
        element.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Show error message
    showErrorMessage(element, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'error-message';
        messageDiv.innerHTML = `
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            ${message}
        `;
        element.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Handle form submission states
    setFormSubmitting(isSubmitting) {
        const form = this.elements.contactForm;
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitText = document.getElementById('submit-text');
        const loadingText = document.getElementById('loading-text');

        if (isSubmitting) {
            form.classList.add('loading');
            submitBtn.disabled = true;
            submitText.classList.add('hidden');
            loadingText.classList.remove('hidden');
        } else {
            form.classList.remove('loading');
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            loadingText.classList.add('hidden');
        }
    }

    // Initialize current year in footer
    initializeFooter() {
        if (this.elements.currentYear) {
            this.elements.currentYear.textContent = new Date().getFullYear();
        }
    }

    // Get SVG icon for various icons
    getIconSVG(iconName) {
        const icons = {
            'github': `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
            'linkedin': `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
            'external-link': `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>`,
            // Add more as needed
        };
        return icons[iconName] || '';
    }
}

// Enhanced Interactive Features (Kept as is, but simplified for static)

class InteractiveFeatures {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollEffects();
        this.initScrollToTop();
        this.initParallax();
        this.initCursor();
        this.initTypingEffect();
        this.initCounters();
        this.initCardHoverEffects();
        this.initFormAnimations();
        this.initProjectFilter();
    }

    // Scroll-based navigation effects
    initScrollEffects() {
        let lastScroll = 0;
        const nav = document.querySelector('nav');
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class
            if (currentScroll > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Update active nav link
            this.updateActiveNavLink();
            
            lastScroll = currentScroll;
        });
    }

    // Update active navigation link based on scroll position
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    // Scroll to top button
    initScrollToTop() {
        let scrollBtn = document.getElementById('scroll-to-top');
        if (!scrollBtn) {
            scrollBtn = document.createElement('button');
            scrollBtn.id = 'scroll-to-top';
            scrollBtn.innerHTML = `
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            `;
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            document.body.appendChild(scrollBtn);
        }
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Parallax effect for hero section
    initParallax() {
        const heroSection = document.getElementById('home');
        if (!heroSection) return;
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = heroSection.querySelectorAll('[data-aos]');
            
            parallaxElements.forEach((el, index) => {
                const speed = (index + 1) * 0.1;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Custom cursor effect (desktop only)
    initCursor() {
        if (window.innerWidth < 768) return;
        
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid #3b82f6;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            display: none;
        `;
        document.body.appendChild(cursor);
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.display = 'block';
        });
        
        function animate() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animate);
        }
        animate();
        
        const hoverElements = document.querySelectorAll('a, button, .project-card, .tech-icon');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.borderColor = '#8b5cf6';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#3b82f6';
            });
        });
    }

    // Typing effect for hero text
    initTypingEffect() {
        const titleElement = document.getElementById('user-title');
        if (!titleElement) return;
        
        const originalText = titleElement.textContent;
        const titles = [
            originalText,
            'Web Developer',
            'UI/UX Enthusiast',
            'Problem Solver',
            'Tech Innovator'
        ];
        
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                titleElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                titleElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentTitle.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        setTimeout(type, 1000);
    }

    // Animated counters for stats (if added)
    initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-counter'));
                    this.animateCounter(counter, 0, target, 2000);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        const range = end - start;
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(start + (range * easeOutQuart));
            
            element.textContent = current + (element.getAttribute('data-suffix') || '');
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Enhanced card hover effects
    initCardHoverEffects() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // Form field animations
    initFormAnimations() {
        const formInputs = document.querySelectorAll('.form-input');
        
        formInputs.forEach(input => {
            // Floating label effect
            input.addEventListener('focus', () => {
                const label = input.previousElementSibling;
                if (label && label.classList.contains('form-label')) {
                    label.style.transform = 'translateY(-5px)';
                    label.style.color = '#3b82f6';
                }
            });
            
            input.addEventListener('blur', () => {
                const label = input.previousElementSibling;
                if (label && label.classList.contains('form-label') && !input.value) {
                    label.style.transform = '';
                    label.style.color = '';
                }
            });
            
            // Character counter for textarea
            if (input.tagName === 'TEXTAREA') {
                const maxLength = input.getAttribute('maxlength') || 1000;
                const counter = input.parentElement.querySelector('.text-sm');
                if (counter) {
                    input.addEventListener('input', () => {
                        const length = input.value.length;
                        counter.textContent = `${length} / ${maxLength}`;
                        counter.style.color = length > maxLength * 0.9 ? '#ef4444' : '#6b7280';
                    });
                }
            }
            
            // Validation feedback
            input.addEventListener('input', () => {
                if (input.validity.valid) {
                    input.style.borderColor = '#10b981';
                } else if (input.value) {
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#e5e7eb';
                }
            });
        });
    }

    // Project filter
    initProjectFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                const projects = document.querySelectorAll('.project-card');
                
                projects.forEach(project => {
                    project.style.display = 'none';
                    project.style.opacity = '0';
                    
                    setTimeout(() => {
                        if (filter === 'all' || project.dataset.category === filter) {
                            project.style.display = 'block';
                            setTimeout(() => {
                                project.style.opacity = '1';
                            }, 50);
                        }
                    }, 300);
                });
            });
        });
    }
}

// Bootstrap app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
    new InteractiveFeatures();
});

// Utilities (Simplified)
class UIUtils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Export for global use if needed
window.PortfolioApp = PortfolioApp;
window.InteractiveFeatures = InteractiveFeatures;