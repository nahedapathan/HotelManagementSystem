package com.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.entity.Room;

@Repository
public interface RoomRepository extends  JpaRepository<Room, Integer> {

	List<Room> findByAvailability(String availability);
	List<Room> findByBedType(String bedType);
}
