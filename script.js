document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebar = document.getElementById('openSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const mainContent = document.getElementById('mainContent');

    openSidebar.addEventListener('click', function() {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
    });

    // Ensure sidebar is visible and correctly positioned on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.style.width = '250px';
            mainContent.style.marginLeft = '250px';
        } else {
            sidebar.style.width = '0';
            mainContent.style.marginLeft = '0';
        }
    });

    // Initial setup for correct sidebar state
    if (window.innerWidth > 768) {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    } else {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
    }
});
