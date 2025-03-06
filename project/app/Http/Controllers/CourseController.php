<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    public function getCalendarEvents()
    {
        $courses = Course::all();
        
        $events = $courses->map(function($course) {
            return [
                'id' => $course->id,
                'title' => $course->name,
                'start' => $course->start,
                'end' => $course->end,
                'description' => $course->description,
                'extendedProps' => [
                    'max_students' => $course->max_students,
                    'coach' => $course->user->name
                ],
                'backgroundColor' => '#4F46E5', // Indigo color for consistency
                'borderColor' => '#4338CA'
            ];
        });

        return response()->json(['events' => $events]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'max_students' => 'required|integer|min:1',
            'start' => 'required|date',
            'end' => 'required|date|after:start',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $imagePath = $request->file('image')->store('courses', 'public');

        $course = Course::create([
            'name' => $request->name,
            'description' => $request->description,
            'max_students' => $request->max_students,
            'start' => $request->start,
            'end' => $request->end,
            'image' => $imagePath,
            'user_id' => Auth::id()
        ]);

        return redirect()->back()->with('success', 'Course created successfully!');
    }
}