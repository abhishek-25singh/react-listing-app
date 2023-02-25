import React from "react";
import "./ListingDetail.css";

function ListingDetail() {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img
          className="listing-detail-img"
          src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <h2 className="listing-detail-title">
          Awesome Property
          <div className="listing-detail-action">
            <i class="listing-detail-action-icon fas fa-edit"></i>
            <i class="listing-detail-action-icon fas fa-trash-alt"></i>
          </div>
        </h2>
        <div className="listing-detail-meta-info">
          <span className="listing-detail-author">
            Author - <strong>Jhon Doe</strong>
          </span>
          <span className="listing-detail-time">1 day ago</span>
        </div>
        <p className="listing-detail-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales
          tellus sit amet dui dignissim placerat. Aliquam vel viverra neque. Ut
          id nisl sollicitudin, gravida nisl et, volutpat ex. Cras tempor
          porttitor libero, vitae gravida eros mattis sit amet. Duis volutpat,
          diam et interdum volutpat, ipsum turpis condimentum augue, vel euismod
          dolor leo non tellus. In eu nisl gravida, volutpat lorem non, rhoncus
          diam. Morbi quis rhoncus velit, ut porttitor metus. Aliquam aliquam
          pretium hendrerit. Nunc bibendum ullamcorper risus vitae aliquam.
          Pellentesque at odio porttitor ipsum vehicula accumsan. Nulla vel
          ornare diam, imperdiet iaculis tellus. Vestibulum condimentum ante vel
          ligula gravida ornare. Sed at ex risus. Donec finibus leo nec accumsan
          pharetra. Fusce sed nunc urna. Ut ex nibh, imperdiet et augue vel,
          imperdiet interdum sapien. Maecenas imperdiet, quam at feugiat
          aliquam, tellus purus pharetra odio, maximus pharetra enim risus
          ultricies magna. Vivamus mauris lorem, maximus ut mollis in, bibendum
          et dui. Aenean condimentum, nisi ut congue vestibulum, massa velit
          mollis nibh, ut consequat lorem nisi sed odio. Curabitur vel quam
          congue, luctus erat a, efficitur odio. Duis auctor porta diam, a
          posuere diam molestie sed. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aliquam volutpat
          pulvinar lorem tincidunt pharetra. Nulla non rutrum arcu. Aliquam arcu
          metus, accumsan non blandit a, sodales rhoncus odio. Mauris ac quam
          sed leo interdum laoreet. Ut ac viverra augue. Vivamus ultricies
          laoreet venenatis. Duis mattis velit non odio efficitur, pellentesque
          tincidunt ante aliquet. Pellentesque auctor, nisi quis tincidunt
          ornare, risus tellus commodo quam, sed consectetur diam enim ac lorem.
        </p>
      </div>
    </div>
  );
}

export default ListingDetail;
