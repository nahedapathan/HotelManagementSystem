package com.hms.service;

import java.util.List;
import java.util.Optional;

import com.hms.entity.Room;

public interface RoomServiceInterface {

	public List<Room> findAll();
	public Optional<Room> findById(int id);
	public List<Room> findAvailable();
	public List<Room> findByBedType(String bedType);
	public Room save(Room r);
}
