use App\Http\Controllers\CourseController;

// Add these routes to your web.php
Route::get('/calendar/events', [CourseController::class, 'getCalendarEvents'])->name('calendar.events');
Route::post('/courses', [CourseController::class, 'store'])->name('courses.store');