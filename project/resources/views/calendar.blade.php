<script>
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await axios.get("/calendar/events");
        const events = response.data.events;

        const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
            headerToolbar: {
                left: 'dayGridMonth,timeGridWeek,timeGridDay',
                center: 'title',
                right: 'listMonth,listWeek,listDay'
            },
            views: {
                listDay: { buttonText: 'Day Events' },
                listWeek: { buttonText: 'Week Events' },
                listMonth: { buttonText: 'Month Events' },
                timeGridWeek: { buttonText: 'Week' },
                timeGridDay: { buttonText: "Day" },
                dayGridMonth: { buttonText: "Month" }
            },
            initialView: "timeGridWeek",
            slotMinTime: "09:00:00",
            slotMaxTime: "19:00:00",
            nowIndicator: true,
            selectable: true,
            selectMirror: true,
            selectOverlap: false,
            weekends: true,
            events: events,
            eventDidMount: function(info) {
                // Add tooltips to events
                tippy(info.el, {
                    content: `
                        <div class="p-2">
                            <h3 class="font-bold">${info.event.title}</h3>
                            <p>${info.event.extendedProps.description}</p>
                            <p>Coach: ${info.event.extendedProps.coach}</p>
                            <p>Max Students: ${info.event.extendedProps.max_students}</p>
                        </div>
                    `,
                    allowHTML: true,
                    theme: 'light'
                });
            }
        });

        calendar.render();

        // Listen for new course creation
        const courseForm = document.querySelector('form[action="{{ route("courses.store") }}"]');
        courseForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            try {
                await axios.post(this.action, formData);
                // Refresh calendar events
                const newResponse = await axios.get("/calendar/events");
                calendar.removeAllEvents();
                calendar.addEventSource(newResponse.data.events);
                
                // Close modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal1'));
                modal.hide();
                
                // Reset form
                this.reset();
                
                // Show success message
                Swal.fire({
                    title: 'Success!',
                    text: 'Course created successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to create course',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    } catch (error) {
        console.error('Failed to load calendar events:', error);
    }
});
</script>