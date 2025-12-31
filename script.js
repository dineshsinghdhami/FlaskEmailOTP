const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        let zoomed = false;

        function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.remove('hidden');
        zoomed = false;
        lightboxImg.style.transform = "scale(1)"; 
        }

        function closeLightbox() {
        lightbox.classList.add('hidden');
        }

       
                function openWhatsApp() {
                    const phoneNumber = '+9779866109958'; 
                    const message = 'Hi Dinesh! I found your website and would like to connect with you.';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                }
        function isMobileDevice() {
            return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        function isIOS() {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent);
        }

        function isAndroid() {
            return /Android/i.test(navigator.userAgent);
        }

        let formData = null;

        function showSuccessMessage(name, message) {
    
            const existingMessage = document.getElementById('form-success-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
             const successDiv = document.createElement('div');
            successDiv.id = 'form-success-message';
            successDiv.className = 'mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-center animate-fade-in';
            successDiv.innerHTML = `
                <div class="flex items-center justify-center space-x-2 text-green-700">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="font-semibold">${name ? 'Thank you ' + name + '!' : 'Success!'}</span>
                </div>
                <p class="text-green-600 mt-2 text-sm">${message}</p>
            `;
 
            const style = document.createElement('style');
            if (!document.getElementById('message-animations')) {
                style.id = 'message-animations';
                style.textContent = `
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fadeIn 0.5s ease-out;
                    }
                    @keyframes fadeOut {
                        from { opacity: 1; }
                        to { opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
 
            const submitButton = document.querySelector('#contact-form button[type="submit"]');
            submitButton.parentNode.insertBefore(successDiv, submitButton.nextSibling);
            
     
            return successDiv;
        }
 
        function removeSuccessMessage(element) {
            if (element && element.parentNode) {
                element.style.animation = 'fadeOut 0.5s ease-out';
                setTimeout(() => {
                    if (element.parentNode) {
                        element.remove();
                    }
                }, 500);
            }
        }

         function openDirectEmail() {
            const subject = 'Contact From Website';
            const body = 'Hi Dinesh! I found your website and would like to connect with you.';
 
            const messageDiv = showSuccessMessage('', 'Opening email...');
            
            if (isMobileDevice()) {
 
                window.location.href = `mailto:dineshdhamidn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
 
                window.addEventListener('focus', function onFocus() {
 
                    window.removeEventListener('focus', onFocus);
 
                    const thankYouDiv = showSuccessMessage('', 'Thank you for your message! I\'ll get back to you soon.');
                    
 
                    setTimeout(() => {
                        removeSuccessMessage(thankYouDiv);
                    }, 3000);
                });
                
            } else {
                const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dineshdhamidn@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                const emailWindow = window.open(gmailWebUrl, '_blank');

                if (emailWindow) {

                    const checkWindowClosed = setInterval(() => {
                        if (emailWindow.closed) {
                            clearInterval(checkWindowClosed);

                            const thankYouDiv = showSuccessMessage('', 'Thank you for your message! I\'ll get back to you soon.');

                            setTimeout(() => {
                                removeSuccessMessage(thankYouDiv);
                            }, 3000);
                        }
                    }, 500);
                }
            }
        }


function openLightbox(imageSrc) {
  const modal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  

  lightboxImage.src = imageSrc;
  
  const button = event.target;
  const card = button.closest('.bg-white');
  const title = card.querySelector('h3').textContent;
  document.getElementById('lightboxCaption').textContent = title;
  

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = 'auto'; 
}

document.getElementById('lightboxModal').addEventListener('click', function(e) {

  if (e.target.id === 'lightboxModal') {
    closeLightbox();
  }
});


document.getElementById('closeLightbox').addEventListener('click', closeLightbox);


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    formData = { name, email, message };
    
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const emailSubject = `Website Contact from ${name}`;
    
    const encodedBody = encodeURIComponent(emailBody);
    const encodedSubject = encodeURIComponent(emailSubject);

    const initialMessage = showSuccessMessage(name, 'Opening email app with your message...');
    
    if (isMobileDevice()) {

        const mailtoUrl = `mailto:dineshdhamidn@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

        const beforeOpenTime = Date.now();

        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);

        let cameBackFromEmail = false;
        
        const handleVisibilityChange = () => {
            if (!document.hidden && !cameBackFromEmail) {
                cameBackFromEmail = true;
                removeSuccessMessage(initialMessage);
                const thankYouDiv = showSuccessMessage(name, 'Thank you for contacting me! I\'ll get back to you soon.');

                setTimeout(() => {
                    removeSuccessMessage(thankYouDiv);
                }, 3000);
                
                this.reset();
  
                document.removeEventListener('visibilitychange', handleVisibilityChange);
                window.removeEventListener('focus', handleWindowFocus);
            }
        };
        
        const handleWindowFocus = () => {
            if (!cameBackFromEmail && Date.now() - beforeOpenTime > 1000) {

                cameBackFromEmail = true;
                removeSuccessMessage(initialMessage);
                const thankYouDiv = showSuccessMessage(name, 'Thank you for contacting me! I\'ll get back to you soon.');
                setTimeout(() => {
                    removeSuccessMessage(thankYouDiv);
                }, 3000);
                this.reset();

                document.removeEventListener('visibilitychange', handleVisibilityChange);
                window.removeEventListener('focus', handleWindowFocus);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('focus', handleWindowFocus);
        setTimeout(() => {
            if (!cameBackFromEmail) {
                cameBackFromEmail = true;
                removeSuccessMessage(initialMessage);
                const thankYouDiv = showSuccessMessage(name, 'Thank you for your message!');
                setTimeout(() => removeSuccessMessage(thankYouDiv), 3000);
                this.reset();
                
                document.removeEventListener('visibilitychange', handleVisibilityChange);
                window.removeEventListener('focus', handleWindowFocus);
            }
        }, 30000);
        
    } else {
        const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dineshdhamidn@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

        const emailWindow = window.open(gmailWebUrl, '_blank');
        
        if (emailWindow) {
            const checkWindowClosed = setInterval(() => {
                if (emailWindow.closed) {
                    clearInterval(checkWindowClosed);
                    removeSuccessMessage(initialMessage);
                    const thankYouDiv = showSuccessMessage(name, 'Thank you for contacting me! I\'ll get back to you soon.');
                    setTimeout(() => {
                        removeSuccessMessage(thankYouDiv);
                    }, 3000);
                    this.reset();
                }
            }, 500);
            let windowFocusHandler = () => {
                if (emailWindow.closed) {
                    window.removeEventListener('focus', windowFocusHandler);
                    return;
                }

                removeSuccessMessage(initialMessage);
                const thankYouDiv = showSuccessMessage(name, 'Thank you for your message!');
                setTimeout(() => removeSuccessMessage(thankYouDiv), 3000);
                this.reset();
                
                window.removeEventListener('focus', windowFocusHandler);
            };

            setTimeout(() => {
                window.addEventListener('focus', windowFocusHandler);
            }, 1000);

            setTimeout(() => {
                clearInterval(checkWindowClosed);
                window.removeEventListener('focus', windowFocusHandler);
            }, 300000);
        }
    }
});



lightboxImg.addEventListener('dblclick', function(e) {
  e.stopPropagation(); 
  zoomed = !zoomed;
  lightboxImg.style.transform = zoomed ? "scale(1.8)" : "scale(1)";
});

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});


        function updateDateTime() {
        const now = new Date();
        const options = { month: 'long', day: 'numeric' }; 
        const dateStr = now.toLocaleDateString('en-US', options);
        const timeStr = now.toLocaleTimeString('en-US', { hour12: false }); 
        document.getElementById("date-time").textContent = `${timeStr} | ${dateStr}`;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); 
    
        const profileTrigger = document.getElementById("profile-trigger");
        const profilePopup = document.getElementById("profile-popup");
        const closeProfile = document.getElementById("close-profile");

        profileTrigger.addEventListener("click", () => {
            profilePopup.style.display = "block";
            setTimeout(() => profilePopup.classList.add("show"), 10);
        });

        closeProfile.addEventListener("click", () => {
            profilePopup.classList.remove("show");
            setTimeout(() => profilePopup.style.display = "none", 400);
        });

        window.addEventListener("click", (e) => {
            if (e.target === profilePopup) {
                profilePopup.classList.remove("show");
                setTimeout(() => profilePopup.style.display = "none", 400);
            }
        });

        const mobileBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");

        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

     
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');
const mobileThemeIconLight = document.getElementById('mobile-theme-icon-light');
const mobileThemeIconDark = document.getElementById('mobile-theme-icon-dark');
const themeToggleText = document.getElementById('theme-toggle-text');


function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        return savedTheme;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    
    return 'light';
}


function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        if (themeIconLight) themeIconLight.classList.add('hidden');
        if (themeIconDark) themeIconDark.classList.remove('hidden');
        if (mobileThemeIconLight) mobileThemeIconLight.classList.add('hidden');
        if (mobileThemeIconDark) mobileThemeIconDark.classList.remove('hidden');
        if (themeToggleText) {
            themeToggleText.textContent = 'Light Mode';
        }
    } else {
        document.documentElement.classList.remove('dark-mode');
        if (themeIconLight) themeIconLight.classList.remove('hidden');
        if (themeIconDark) themeIconDark.classList.add('hidden');
        if (mobileThemeIconLight) mobileThemeIconLight.classList.remove('hidden');
        if (mobileThemeIconDark) mobileThemeIconDark.classList.add('hidden');
        if (themeToggleText) {
            themeToggleText.textContent = 'Dark Mode';
        }
    }
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}


const preferredTheme = getThemePreference();       // Initialize theme
applyTheme(preferredTheme);


if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
        toggleTheme();
       
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
    }
});
