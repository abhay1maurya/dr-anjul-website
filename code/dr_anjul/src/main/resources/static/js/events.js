document.addEventListener("DOMContentLoaded", () => {
  const moreInfoBtns = document.querySelectorAll(".more-info-btn");
  const loadMoreBtn = document.getElementById("load-more-events");

  moreInfoBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const eventCard = event.target.closest(".event-card");
      const eventDetails = eventCard.querySelector(".event-details");

      // Toggle event details visibility with animation
      if (eventDetails.classList.contains("visible")) {
        eventDetails.classList.remove("visible");
      } else {
        eventDetails.classList.add("visible");
      }
    });
  });

  // Simulate loading more events by showing the "Load More" button
  loadMoreBtn.style.display = "block";
  
  loadMoreBtn.addEventListener("click", () => {
    const newEvent = document.createElement("div");
    newEvent.classList.add("event-card");
    newEvent.innerHTML = `
      <h3>New Event: Health Consultation</h3>
      <p>Date: 5 June 2025</p>
      <p>Location: Dr. Anjul's Clinic</p>
      <button class="more-info-btn">More Info</button>
      <div class="event-details">
        <p>Description: A consultation on improving your mental and physical health through homeopathy.</p>
      </div>
    `;
    
    document.querySelector(".events-list").appendChild(newEvent);

    // Add fade-in effect for the new event
    setTimeout(() => {
      newEvent.classList.add("fade-in");
    }, 100); // Small delay before fade-in
    
    // Reattach the event listener for the new event card
    const newMoreInfoBtn = newEvent.querySelector(".more-info-btn");
    newMoreInfoBtn.addEventListener("click", () => {
      const eventDetails = newEvent.querySelector(".event-details");
      eventDetails.classList.toggle("visible");
    });
  });
});
