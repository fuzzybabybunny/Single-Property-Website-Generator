if (Websites.find().count() === 0) {
  Websites.insert({
    address1: '1234 Main St.',
    address2: '',
    city: 'Mountain View',
    state: 'CA',
    zip: '94404',
    owner: 'admin',
    created: new Date()
  });
  Websites.insert({
    address1: '8888 Somerset Ct.',
    address2: '',
    city: 'Mountain View',
    state: 'CA',
    zip: '94404',
    owner: 'admin',
    created: new Date()
  });
  Websites.insert({
    address1: '5555 8th Ave.',
    address2: 'Apt 4B',
    city: 'Oakland',
    state: 'CA',
    zip: '94231',
    owner: 'admin',
    created: new Date()
  });
}