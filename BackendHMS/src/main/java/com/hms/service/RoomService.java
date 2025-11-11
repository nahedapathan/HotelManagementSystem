package com.hms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.entity.Room;
import com.hms.repository.RoomRepository;

@Service
public class RoomService implements RoomServiceInterface {

	@Autowired
	private RoomRepository roomRepository;
	
	@Override
	public List<Room> findAll() {
		return roomRepository.findAll();
	}

	@Override
	public Optional<Room> findById(int id) {
		return roomRepository.findById(id);
	}

	@Override
	public List<Room> findAvailable() {
		return roomRepository.findByAvailability("Available");
	}

	@Override
	public List<Room> findByBedType(String bedType) {
		return roomRepository.findByBedType(bedType);
	}

	@Override
	public Room save(Room r) {
		return roomRepository.save(r);
	}

}
