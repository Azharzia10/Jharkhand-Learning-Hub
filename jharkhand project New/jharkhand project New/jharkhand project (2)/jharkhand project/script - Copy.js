// script.js - Complete functionality for PRAGATI PORTAL

// Chart initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    initializeSearch();
    initializeModals();
});

// Initialize Charts
function initializeCharts() {
    const ctx = document.getElementById('attendanceChart');
    if (ctx) {
        const attendanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                    label: 'Attendance %',
                    data: [85, 88, 82, 90, 87, 80],
                    borderColor: '#7CA982',
                    backgroundColor: 'rgba(124, 169, 130, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Weekly Attendance Trend'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('teacherSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('.data-table tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    }
}

// Modal functionality
function initializeModals() {
    // Add Teacher Modal
    const addTeacherModal = document.getElementById('addTeacherModal');
    const addTeacherForm = document.getElementById('addTeacherForm');
    
    if (addTeacherForm) {
        addTeacherForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Teacher added successfully!');
            closeAddTeacherModal();
        });
    }
}

// Modal functions
function openAddTeacherModal() {
    document.getElementById('addTeacherModal').style.display = 'block';
}

function closeAddTeacherModal() {
    document.getElementById('addTeacherModal').style.display = 'none';
}

function openAnnouncementModal() {
    alert('New announcement modal would open here!');
}

// Timetable functions
function generateTimetable() {
    alert('AI Timetable generation started! This would connect to backend in real implementation.');
    // Simulate loading
    setTimeout(() => {
        alert('Timetable generated successfully!');
    }, 2000);
}

// Attendance functions
function markAttendance() {
    alert('Attendance marking interface would open here!');
}

// Teacher management functions
function editTeacher(id) {
    alert(`Editing teacher with ID: ${id}`);
}

function deleteTeacher(id) {
    if (confirm('Are you sure you want to delete this teacher?')) {
        alert(`Teacher with ID: ${id} deleted successfully!`);
        // In real implementation, this would make an API call
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Class selection handlers
function handleClassChange(selectElement) {
    const selectedClass = selectElement.value;
    alert(`Loading data for ${selectedClass}`);
    // In real implementation, this would fetch class-specific data
}

// Date change handlers
function handleDateChange(dateElement) {
    const selectedDate = dateElement.value;
    alert(`Loading attendance for ${selectedDate}`);
    // In real implementation, this would fetch date-specific data
}

// Export functionality
function exportData(type) {
    alert(`Exporting ${type} data...`);
    // In real implementation, this would generate and download CSV/PDF
}

// Refresh data
function refreshData() {
    alert('Refreshing data...');
    location.reload();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#7CA982' : '#F2C94C'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Simulate data updates
function simulateDataUpdate() {
    setTimeout(() => {
        showNotification('New attendance data available', 'success');
    }, 5000);
}

// Initialize data updates on dashboard
if (window.location.pathname.includes('index.html')) {
    simulateDataUpdate();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                window.location.href = 'index.html';
                break;
            case '2':
                e.preventDefault();
                window.location.href = 'teachers.html';
                break;
            case '3':
                e.preventDefault();
                window.location.href = 'timetable.html';
                break;
        }
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Responsive menu toggle (for mobile)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('mobile-open');
}