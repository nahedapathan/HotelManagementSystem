package com.hms.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.entity.Customer;
import com.hms.entity.Room;
import com.hms.repository.CustomerRepository;
import com.hms.repository.RoomRepository;

import jakarta.transaction.Transactional;

@Service
public class CustomerService implements CustomerServiceInterface {

	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private RoomRepository roomRepository;
	
	
	
	@Override
	public List<Customer> findAll() {
		return customerRepository.findAll();
	}

	@Override
	public Optional<Customer> findById(long id) {
		return customerRepository.findById(id);
	}

	@Override
	public Optional<Customer> findByNumber(String number) {
		return customerRepository.findByNumber(number);
	}

	@Override
	public Customer save(Customer c) {
		return customerRepository.save(c);
	}
	
	

	@Transactional
	public Customer checkIn(Customer c)
	{
		Room room =c.getRoom();
		if(room !=null)
		{
			Optional<Room> r=roomRepository.findById(room.getRoomNumber());
			if(r.isPresent())
			{
				Room roomEntity=r.get();
				roomEntity.setAvailability("Occupied");
				roomRepository.save(roomEntity);
				c.setRoom(roomEntity);
			}
		}
		return customerRepository.save(c);
	}
	
	@Transactional
	public void checkOut(long customerId)
	{
		Optional<Customer> oc=customerRepository.findById(customerId);
		if(oc.isPresent())
		{
			Customer c=oc.get();
			Room r=c.getRoom();
			if(r!=null)
			{
				Optional<Room> rr=roomRepository.findById(r.getRoomNumber());
				rr.ifPresent(roomEntity -> {
					roomEntity.setAvailability("Available");
					roomRepository.save(roomEntity);
				});
			}
			customerRepository.delete(c);
		}
		else
		{
			throw new RuntimeException("Customer not found");
		}
	}

}
