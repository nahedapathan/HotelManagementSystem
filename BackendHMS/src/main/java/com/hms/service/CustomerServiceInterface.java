package com.hms.service;

import java.util.List;
import java.util.Optional;

import com.hms.entity.Customer;

public interface CustomerServiceInterface {

	public List<Customer> findAll();
	public Optional<Customer> findById(long id);
	public Optional<Customer> findByNumber(String number);
	public Customer save(Customer c);
	public void checkOut(long customerId);
	public Customer checkIn(Customer c);
}
