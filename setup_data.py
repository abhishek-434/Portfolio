from django.contrib.auth.models import User
from portfolio.models import Profile, Skill, Project, Experience, Education
from datetime import date

# Create Superuser
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'admin123')
    print("Superuser 'admin' created.")

# Create Profile
if not Profile.objects.exists():
    Profile.objects.create(
        name="Alex Dev",
        role="Full Stack Python Developer",
        bio="Passionate developer specializing in Django and modern web technologies. I build clean, efficient, and beautiful web applications.",
        # Image field is left empty or needs a valid path if strict
    )
    print("Profile created.")

# Create Skills
skills_data = [
    ("Python", "fab fa-python", 95),
    ("Django", "fas fa-server", 90),
    ("JavaScript", "fab fa-js", 85),
    ("HTML/CSS", "fab fa-html5", 90),
    ("PostgreSQL", "fas fa-database", 80),
]
for name, icon, prof in skills_data:
    if not Skill.objects.filter(name=name).exists():
        Skill.objects.create(name=name, icon_class=icon, proficiency=prof)
print(f"{len(skills_data)} Skills created.")

# Create Projects
if not Project.objects.exists():
    Project.objects.create(
        title="E-Commerce Platform",
        description="A fully featured online store built with Django and Stripe payment integration. Includes user authentication, cart functionality, and order tracking.",
        tools="Django, Python, Stripe, Bootstrap",
        live_link="https://example.com",
        repo_link="https://github.com"
    )
    Project.objects.create(
        title="Task Management App",
        description="A productivity tool for teams to manage tasks and projects. Real-time updates using WebSockets.",
        tools="Django Channels, React, Redis",
        live_link="https://example.com",
        repo_link="https://github.com"
    )
    print("Projects created.")

# Create Experience
if not Experience.objects.exists():
    Experience.objects.create(
        role="Senior Python Developer",
        company="Tech Solutions Inc.",
        start_date=date(2023, 1, 1),
        description="Leading a team of developers in building scalable web applications."
    )
    Experience.objects.create(
        role="Web Developer",
        company="Creative Agency",
        start_date=date(2021, 6, 1),
        end_date=date(2022, 12, 31),
        description="Developed client websites and internal tools."
    )
    print("Experience created.")
