package com.hms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.entity.Room;
import com.hms.service.RoomService;
import com.hms.service.RoomServiceInterface;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {

	@Autowired
	private RoomServiceInterface roomService;
	
	@GetMapping
	public List<Room> all()
	{
		return roomService.findAll();
	}
	
	@GetMapping("/available")
	public List<Room> available()
	{
		return roomService.findAvailable();
	}
	
	@GetMapping("/type/{bedType}")
	public List<Room> byType(@PathVariable String bedType)
	{
		return roomService.findByBedType(bedType);
	}
	
	@PutMapping("/{roomNumber}")
	public ResponseEntity<Room> update(@PathVariable int roomNumber,@RequestBody Room data)
	{
		return roomService.findById(roomNumber).map(room ->{
			room.setAvailability(data.getAvailability());
			room.setCleanStatus(data.getCleanStatus());
			room.setPrice(data.getPrice());
			room.setBedType(data.getBedType());
			Room saved=roomService.save(room);
			return ResponseEntity.ok(saved);
		}).orElse(ResponseEntity.notFound().build());
	}
	
	
	
}
