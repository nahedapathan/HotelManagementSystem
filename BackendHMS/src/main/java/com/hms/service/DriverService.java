package com.hms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.entity.Driver;
import com.hms.repository.DriverRepository;

@Service
public class DriverService implements DriverServiceInterface{

	@Autowired
	private DriverRepository driverRepository;
	
	@Override
	public List<Driver> findAll() {
		return driverRepository.findAll();
	}

	@Override
	public List<Driver> findByBrand(String brand) {
		return driverRepository.findByBrand(brand);
	}

	@Override
	public Driver save(Driver d) {
		return driverRepository.save(d);
	}

}
