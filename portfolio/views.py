from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Profile, Skill, Project, Education, Experience, ContactMessage

def home(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        messages.success(request, 'Your message has been sent successfully!')
        return redirect('home')

    profile = Profile.objects.first()
    skills = Skill.objects.all()
    projects = Project.objects.all()
    educations = Education.objects.all().order_by('-start_date')
    experiences = Experience.objects.all().order_by('-start_date')
    
    context = {
        'profile': profile,
        'skills': skills,
        'projects': projects,
        'educations': educations,
        'experiences': experiences,
    }
    return render(request, 'portfolio/home.html', context)
