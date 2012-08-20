package nz.co.android.cowseye.common;

import java.net.URI;


public interface Constants {

	//Start Activity requestCode Constants
	public static final String KEY_REQUEST_CODE = "KEY_REQUEST_CODE"; 

	//Activity Request Codes
	public static final int REQUEST_CODE_CAMERA = 1;
	public static final int REQUEST_CODE_LOCATION = 2;
	public static final int REQUEST_CODE_PROBLEM_DESCRIPTION = 3;
	public static final int REQUEST_CODE_TAKE_PICTURE = 4;
	public static final int REQUEST_CODE_GALLERY = 5;


	
	/* Keys for information passed between activities or within for activity destroy on rotation */
	public static final String IMAGE_URI_KEY = "image_uri_key";
	public static final String DESCRIPTION_KEY = "description";
	public static final String CONTACT_DETAILS_KEY = "contact";
	public static final String LOCATION_KEY = "location";
	public static final String LOCATION_LATITUDE_KEY = "location_lat";
	public static final String LOCATION_LONGITUDE_KEY = "location_lon";
	public static final String LOCATION_GOOGLE_LINK = "google_link";
	
	/* Shared preferences name and keys for details */
	public static final String SHARED_PREFS = "shared_prefs";
	public static final String SHARED_PREFS_FIRST_NAME= "first_name";
	public static final String SHARED_PREFS_LAST_NAME= "last_name";
	public static final String SHARED_PREFS_EMAIL= "email";
	public static final String SHARED_PREFS_NUMBER= "number";

	public static final String GOOGLE_MAP_LINK = "https://maps.google.com/maps?q=";

	public static final int IMAGE_WIDTH = 640;
	public static final int IMAGE_HEIGHT = 480;

	
	/* Service paths */
	public static final String SERVER_PATH = "http://barretts.ecs.vuw.ac.nz:4567/wainz/";
	public static final String SUBMISSION_PATH = SERVER_PATH + "submit/";
	
	/* Form post entities */
	public static final String FORM_POST_IMAGE = "form_post_image";
	public static final String FORM_POST_GEO = "form_post_geo";
	public static final String FORM_POST_IMAGE_TAG = "form_post_tag";
	public static final String FORM_POST_IMAGE_DESCRIPTION = "form_post_description";
	public static final String FORM_POST_ADDRESS = "form_post_address";

}