package com.hms.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="rooms")
public class Room {

	@Id
	@Column(name="room_number")
	private int roomNumber;
	private String availability; //available or occupied
	private String cleanStatus;
	private int price;
	private String bedType;//single double
	
}
